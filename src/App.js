import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Porto from './components/porto';
import Profil from './components/profil';
import Contact from './components/contact';
import Service from './components/service';


function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <Home />
      <Porto/>
      <Service/>
      <Profil/>
      <Contact/>
    </div>
  );
}

export default App;
