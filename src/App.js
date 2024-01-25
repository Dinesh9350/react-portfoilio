import logo from './logo.svg';
import Navbar from './components/NavbarCustom';
import Footer from './components/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
