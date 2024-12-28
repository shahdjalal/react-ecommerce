import React from 'react'

import Category from '../categories/Category';
import Product from '../products/product';
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from './home.module.css'


export default function Home() {
  return (
    <>
<div className={`${style.hero}`}>
<div className={`container  `}>

  <h1>SHOP NOW!</h1>
  <FontAwesomeIcon icon={faDownLong}  className={` ${style.icon}`}/>

 
</div>
</div>
    <Category />
    <Product />
  </>
  )
}
