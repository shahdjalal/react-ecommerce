import React from "react";

export default function AboutUs() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row justify-content-center">
     
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                To provide everything you need in one convenient online store. 
                We aim to make shopping fast, easy, and enjoyable for everyone!
              </p>
            </div>
          </div>
        </div>

      
        <div className="col-md-4 mb-4 ">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                To be the leading online destination for high-quality products at affordable prices, offering unmatched customer service.
              </p>
            </div>
          </div>
        </div>

      
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body">
              <h5 className="card-title">Why Choose Us?</h5>
              <p className="card-text">
                With a wide variety of products and a focus on customer satisfaction, we ensure you’ll always find what you’re looking for!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
