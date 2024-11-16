import { useContext, useEffect, useState } from "react";
import './ProductList.css'
import { Link } from "react-router-dom";
import carData from '../../Data/Data'
import { ProductContext } from "../../context/ProductContext";


function ProductList() {
 
  const {allProduct} = useContext(ProductContext)
  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="productlist-format">
        <p id="price">Product</p>
        <p id="title">Title</p>
        <p id="price">Price (Rs)</p>
        <p id="price">Remove</p>
      </div>
      <div className="productlist-allproducts">
        <hr />
        {allProduct.map((product,index)=>{
          return(
            <div key={index} className="productlist-format">
                <img src={product.images[0]} alt="" className="listproduct-image"/>
               <Link to={`/description/${product._id}`}><p id="title">{product.title}</p></Link> 
                <p id="price">{product.price}</p>
                <button id="remove" >Remove</button>
                <Link to={`/edit/${product._id}`}><button id="remove">Edit</button></Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList;
