import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/Signup/signup';
// import Banner from './component/Banner';
import Footer from './component/Footer/Footer';
import Home from './Pages/Home/Home';
// import Cars from './component/Cars';
import ProductList from './component/ProductList/ProductList'
import AddProduct from './component/AddProduct/AddProduct'
import './App.css'
import EditProduct from './component/EditProduct/EditProduct';
import ProductDesc from './component/ProductDesc/ProductDesc';


function App() {
  

  
  return (
    <>
      <Navbar/>
      <Sidebar/>
    {/* {!userData.email ? <div className='login-message'><h1>Please login/SignUp to get the Dashboard.............</h1> </div>: */}
       
    <div className='display-container'>
       
       <div className='elements-container'>
        <Routes>
          <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/login'
              element={<Login/>}
            />
             <Route
              path='/signup'
              element={<Signup/>}
            />
            <Route
              path='/description/:productId'
              element={<ProductDesc/>}
            />
            <Route
              path='/addproduct'
              element={<AddProduct/>}
            />
            <Route
              path='/edit/:productId'
              element={<EditProduct/>}
            />
            <Route
              path='/productlist'
              element={<ProductList/>}
            />
            
            
        </Routes>
       </div>
       
    </div>
      <Footer/>
    </>
  )
}

export default App
