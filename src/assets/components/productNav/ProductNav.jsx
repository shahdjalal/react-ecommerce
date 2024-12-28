
import React from 'react'
import UseFetch from '../hooks/UseFetch';
import style from './productNav.module.css'
import useFetchProduct from '../hooks/UseFetchProduct';
import Loader from '../loading/Loader';
import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function ProductNav() {

    const {data,error,isLoading}= useFetchProduct(`https://dummyjson.com/products?limit=40`);
    console.log(data); 
   
    
  if(isLoading){

    return <Loader />
  }

  return (
    <>
    
    <div className="container">
        <h1>Products</h1>
          <div className="row   gap-4 ">
            { data.products.map((product, index) => (
              <div key={index} className={`col-lg-3 ${style.product} d-flex flex-column` } >
                <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                <h3>{product.title}</h3>
                <span>{product.price}$</span>
                <Link to={`/productNav/${product.id}`}> Details </Link>
              </div>
            ))}
          </div>
        </div>
    
    </>
  )
}
