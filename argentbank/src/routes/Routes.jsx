import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/Login';
import User from '../pages/User';


function RoutesReact() {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/user' element={<User />} />
                  
          {/* Renvoie à la page Home si une mauvaise route est tapée */}
          <Route path='/*' element={<Home />} />

      </Routes>
  );
}

export default RoutesReact;