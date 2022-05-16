import React from 'react';

import './seller.css';
import './add_product.css';

const ManageProduct = () => {
return (
    
	<div class="bdy">
    <center>
	<h1 class="add_head" >Manage Product</h1>
    </center>
    {/* Product list */}
    <div class="product-listing">
       <div class="add-product">
           <p class="add-product-title">Add Product</p>
           <a href="/add_product" class="btn-addpro">Add Product</a>
       </div>
       <img src={require("./images/no-products.png")}class="no-product-image" alt="" hidden></img>
       

       {/*delete alert */}
       <div class="delete-alert">
           <div class="alert">
               <button class="close-btn"><img src={require("./images/close.png")} alt=""></img></button>
               <img src={require("./images/delete-warning.png" )} class="delete-svg" alt=""></img>
               <p class="text">Are you sure? You want to delete this product</p>
               <button class="delete-btn">Delete</button>
           </div>
       </div>

       {/* cards */}
       <div class="product-container">
           <div class="product-card">
               <div class="product-image">
                   <span class="tag">Draft</span>
                   <img src={require('./images/2.jpg')} class="product-thumb" alt=""/>
                   <button class="card-action-btn edit-btn"><img src={require('./images/edit.png')} alt=""/></button>
                   <button class="card-action-btn open-btn"><img src={require('./images/open.png')} alt=""/></button>
                   <button class="card-action-btn delete-popup-btn"><img src={require('./images/delete.png')} alt=""/></button>
               </div>
               <div class="product-info">
                   <h2 class="product-brand">brand</h2>
                   <p class="product-short-des">a short line about the cloth..</p>
                   <span class="price">$20</span><span class="actual-price">$40</span>
               </div>
           </div>
       </div>
    
    </div>
	
	</div>
);
};

export default ManageProduct;