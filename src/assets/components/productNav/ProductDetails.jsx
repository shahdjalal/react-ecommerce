import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetchProduct from '../hooks/UseFetchProduct';
import Loader from '../loading/Loader';

export default function ProductDetails() {

    const {id}=useParams();
    const {data,error,isLoading}= UseFetchProduct(`https://dummyjson.com/products/${id}`);

    console.log(data);

     if(isLoading){
    
        return <Loader />
      }
      
  return (

    <>
    {error? <div className='alert alert-danger'>{error}</div> : ' '  }
    
    <div className='container'>
<div className='row'>

    <div className='col-md-4'>

        <div className='product-info'>

        </div>
        <div className="card m-3" style={{width: '18rem'}}>
  <img src={data.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h3 className="card-title">{data.title}</h3>
    <p className='text-danger'>{data.price}$</p>
    <span class="badge text-bg-secondary">{data.category}</span>
   
  
    
  </div>
</div>
    </div>

    <div className='col-md-8 mt-3'>
    <div className='product-details'>
         <p className="card-text">{data.description}</p>
         <h3>Product Images : </h3>

         {data.images.map (img =>  <img  src={img} className='w-25' /> )}
       
       <p>{data.tags.join(',')}</p>

        
    </div>
   
    </div>

    </div>
</div>

</>
  )
}
