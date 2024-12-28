import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark  position-sticky top-0">
   <div className="container">
     <Link className={`navbar-brand ${style.logo}`} to={'/'}>Products</Link>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav ms-auto gap-4 list">
       <Link className={`nav-link ${style.link}`}  to={'/'}>Home</Link>
         <Link className={`nav-link ${style.link}`} aria-current="page" to={'/categories'}>Categories </Link>
         <Link className={`nav-link ${style.link}`}  to={'/productNav'}>Products</Link>
         <Link className={`nav-link ${style.link}`}  to={'/create'}>Create</Link>
       </div>
     </div>
   </div>
 </nav>
 
        
     
     </>
  )
}
