import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import ShopCard from './ShopCard/ShopCard'
import Footer from './Footer/Footer';
import {Navigate ,Route ,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
      <>
       <Nav/>
    <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/ShopCard' element={<ShopCard/>}/>
    </Routes>
    <Footer/>
      </>
  );
}

export default App;
