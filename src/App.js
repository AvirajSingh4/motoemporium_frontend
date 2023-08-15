import './App.css';
import Navbarcomp from './components/Navbarcomp'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buycar from './components/Buycar'
import Fortuner from './components/Fortuner';
import Book from './components/Book'
import Footer from './components/Footer';
import Carservicing from './components/Carservicing';
import Requirement from './components/Requirement';
import Sell from './components/Sell';
import Adminlogin from './components/Adminlogin'
import Adminafterlogin from './components/Adminafterlogin'
import Adminviewall from'./components/Adminviewall'
import Adminsearchuser from './components/Adminsearchuser';
import Adminviewall1 from './components/Adminviewall1';
import Adminviewall2 from './components/Adminviewall2'
import Exploremore from './components/Exploremore';
import Hyundai from './components/Hyundai';
import Adminviewall3 from './components/Adminviewall3';
import Tata from './components/Tata';
import Mg from './components/Mg';
import Mercedes from './components/Mercedes';
import Bmw from './components/Bmw';
import Kia from "./components/Kia";
function App() {
  return (
    <div align="center">
      
      

      <BrowserRouter>
      <Navbarcomp />
      <Routes>
        <Route path='/' element={<Home />} />
      
        <Route path='/buycar' element={<Buycar />} />
        <Route path='/fortuner' element={<Fortuner />} />
        <Route path='/book' element={<Book />} />
        <Route path='/carservicing' element={<Carservicing />} />
        <Route path='/userreg' element={<Requirement />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/adminafterlogin' element={<Adminafterlogin/>}/>
        <Route path='/viewalluser' element={<Adminviewall/>}/>
        <Route path='/searchuser' element={<Adminsearchuser/>}/>
        <Route path='/viewalluser1' element={<Adminviewall1/>}/>
        <Route path='/viewalluser2' element={<Adminviewall2/>}/>
        <Route path='/explore' element={<Exploremore/>}/>
        <Route path='/hyundai' element={<Hyundai/>}/>
        <Route path='/viewalluser3' element={<Adminviewall3/>}/>
        <Route path='/tata' element={<Tata/>}/>
        <Route path='/mg' element={<Mg/>}/>
        <Route path='/mercedes' element={<Mercedes/>}/>
        <Route path='/bmw' element={<Bmw/>}/>
        <Route path='/Kia' element={<Kia/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
