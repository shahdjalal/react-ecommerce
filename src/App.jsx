import React from 'react'
import Navbar from './assets/components/navbar/Navbar'
import Category from './assets/components/categories/Category'
import { Routes, Route } from 'react-router-dom';
import Details from './assets/components/categoryDetails/Details';
import ProductNav from './assets/components/productNav/ProductNav';
import Home from './assets/components/home/Home';
import Create from './assets/components/create/Create';
import Footer from './assets/components/footer/Footer';
import ProductDetails from './assets/components/productNav/ProductDetails';
import AboutUs from './assets/components/about/AboutUs';


export default function App() {
  return (
    <>
   
     <Navbar />
     <Routes>
   
     <Route path="/" element={<Home />} />
     <Route path="/categories" element={<Category />} />
       <Route path="/categoryDetails/:categoryName" element={ <Details />} />
       <Route path="/productNav" element={ <ProductNav />} />
       <Route path="/productNav/:id" element={ <ProductDetails />} />
       <Route path="/create" element={ <Create />}  />
     </Routes>
    <AboutUs />
    <Footer/>

    
    </>
   
  )
}
