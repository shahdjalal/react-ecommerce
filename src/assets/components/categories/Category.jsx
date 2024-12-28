import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './category.module.css'
import UseFetch from '../hooks/UseFetch';
import { Link } from 'react-router-dom'
import Loader from '../loading/Loader';

export default function Category() {
 
// `https://dummyjson.com/products/Data`

const {data,error,isLoading}= UseFetch(`https://dummyjson.com/products/categories`);
console.log(data);


 if(isLoading){

    return <Loader />
  }
 

  return (
    <>
    <div className='container p-4'>
        <h1 className='text-center'>Categories</h1>
    <div className='row gap-4 '>
    {data.map((category, index) => (
           
      <div key={index} className={`${style.category}  col-lg-4 `} >
            <h3>{category.slug}</h3> 
            <Link to={`/categoryDetails/${category.slug}`}>Details</Link>

          </div>
         
          
        ))
      }
   </div>
    </div>
      
    </>
  );
}
