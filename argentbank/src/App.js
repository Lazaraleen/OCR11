import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import RoutesReact from './routes/Routes';

// import useFetch from './useFetch';
// import './App.css';

// function App() {
//   const { data: quote, loading, error } = useFetch('http://localhost:3001/api/v1/user/login')

//   return (
//     <div className="App">
//       { loading && <p>{loading}</p> }
//       { quote && <p>"{quote}"</p> }
//       { error && <p>{error}</p> }
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesReact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;