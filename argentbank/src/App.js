import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import RoutesReact from './routes/Routes';

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