import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  return (
    <div className={`${style.footer}`}>
    <div className='container'>
      
      <div className='row'>
        <div className='col'>
         <h3>Location</h3>
         <p>2215 John Daniel DriveClark, MO 65243</p>
        </div>
        <div className='col'>
        <h3>Around the Web</h3>
        <p>2215 John Daniel DriveClark, MO 65243</p>
         </div>
         <div className='col'>
         <h3>About Freelancer</h3>
         <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
         </div>
      </div>  
</div>
  </div>
  )
}
