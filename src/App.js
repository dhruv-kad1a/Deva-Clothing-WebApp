import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop'
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import womwn_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Cart from './Pages/Cart';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={ <ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={ <ShopCategory banner={womwn_banner} category="women"/>}/>
        <Route path='/kids' element={ <ShopCategory banner={kid_banner} category="kid"/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/carts' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
