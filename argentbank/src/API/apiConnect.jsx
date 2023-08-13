import axios from "axios";

const baseURL = "http://localhost:3001/api/v1/user";

// Les connexions à l'API: méthode, url et besoin d'authentification
const apiConnect = {
    login: {
        method: "post",
        url: "/login",
        auth: false,
    },
    signUp: {
        method: "post",
        url: "/signup",
        auth: false,
    },
    profilePost: {
        method: "post",
        url: "/profile",
        auth: true,
    },
    profilePut: {
        method: "put",
        url: "/profile",
        auth: true,
    },
};

// Gérer les appels à l'API

export const callAPI = async (connect, token, data = {}) => {
    const connectAPI = apiConnect[connect];
    if (!connectAPI) {
        console.error("Erreur à l'appel de connexion à l'API");
        return;
    }
    
    const headers = {"Content-Type": "application/json",};
    if (connectAPI.auth) {headers.Authorization = `Bearer ${token}`;}

    try {
    const response = await axios({
        method: connectAPI.method,
        url: `${baseURL}${connectAPI.url}`,
        data,
        headers,
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API :", error);
        throw error;
    }
};

export default callAPI;