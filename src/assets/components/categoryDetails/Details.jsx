import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './details.module.css'
import useFetchProduct from '../hooks/UseFetchProduct';
import Loader from '../loading/Loader';
import { Link } from 'react-router-dom'
export default function Details() {
  const { categoryName } = useParams(); 
  


    const {data,error,isLoading}= useFetchProduct(`https://dummyjson.com/products/category/${categoryName}` );
     
  
 if(isLoading){

    return <Loader />
  }
 

  return (
    <div className="container">
      <h1>{categoryName}</h1> 
      <div className="row gap-4">
        {data.products.map((product, index) => (
          <div key={index} className={`col-lg-3 ${style.product} d-flex flex-column` } >
            <img src={product.thumbnail} alt={product.title} className="img-fluid" />
            <h3>{product.title}</h3>
            <span>{product.price}$</span>
            <Link to={`/productNav/${product.id}`}> Details </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
