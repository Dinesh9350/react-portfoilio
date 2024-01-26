import { useEffect } from 'react';
import Navbar from './components/NavbarCustom';
import Footer from './components/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='App bg-black text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
