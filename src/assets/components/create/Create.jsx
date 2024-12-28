import React from 'react'
import style from './create.module.css'
export default function Create() {
  return (
    <div className="container mt-5">
    <h2 className='mb-3'>Create New Product</h2>
    <form>
     
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" id="title" placeholder="Enter product title" />
       
      </div>

     
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control" id="description" placeholder="Enter product description">

          </textarea>
      </div>

     
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input type="number" className="form-control" id="price" placeholder="Enter product price" />
         
      </div>

     
      <div className="mb-3">
        <label htmlFor="thumbnail" className="form-label">
          Thumbnail URL
        </label>
        <input type="text" className="form-control"  id="thumbnail" placeholder="Enter product thumbnail URL"/>
        
      </div>

      
      <button type="button" className={`btn btn-primary${style.create} `}>
        Create Product
      </button>
    </form>
  </div>
  )
}
