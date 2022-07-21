
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from "react-router-dom";
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import Footer from './page/Footer';
function App() {
  return (
   <>
   
   <Header/>
   <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/cart/:id' element={<CardsDetails/>} />
    <Route path='/cart' element={ <Cards/> } />
    <Route path='/about' element={ <About/> } />
    <Route path='/contact' element={ <Contact/> } />
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
