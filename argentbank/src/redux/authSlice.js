import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user:"",
    token:"",
    loading: false,
    error:""
}

export const signUpUser = createAsyncThunk('signupuser', async(body) => {
    const res = await fetch("http://localhost:3001/api/v1/user/signup", {
        method:"post",
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    }) 
    return await res.json();
})

export const signInUser = createAsyncThunk('signinuser', async(body) => {
    const res = await fetch("http://localhost:3001/api/v1/user/login", {
        method:"post",
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    }) 
    return await res.json();
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addTUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        logout: (state, action) => {
            state.token = null;
            localStorage.clear();
        }
    },
    extraReducers: {
        //************************** login ***************** */
        [signInUser.pending]: (state, action) =>{
            state.loading = true
        },
        [signInUser.fulfilled]: (state, {payload:{error,msg,token,user}}) => {
            state.loading = false;
            if (error) {
                state.error = error;                
            } else {
                state.msg = msg;
                state.token = token;
                state.user = user;
                localStorage.setItem('msg', msg)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true
        },
        //**************************** signin  **************** */
        [signUpUser.pending]: (state, action) =>{
            state.loading = true
        },
        [signUpUser.fulfilled]: (state, {payload:{error,msg}}) => {
            state.loading = false;
            if(error){
                state.error = error
            } else {
                state.msg =msg
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        }
    }
})

export const {addToken, addTUser, logout} = authSlice.actions;
export default authSlice.reducer;