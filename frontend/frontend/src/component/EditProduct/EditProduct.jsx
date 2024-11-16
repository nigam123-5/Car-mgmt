import React, { useContext, useState } from "react";
import './EditProduct.css'
import axios from 'axios'
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";


const EditProduct = () => {

  const{allProduct,getAllProduct,url} = useContext(ProductContext)

  const {productId} = useParams();
 const EditProduct = allProduct.find((e)=> e._id ===(productId));

  
  const [product, setProduct] = useState({...EditProduct});
  console.log(product,"edit product",EditProduct,productId)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const imageHandler = (e)=>{
    setProduct(prev => ({ ...prev, images: { ...prev.images, [e.target.name]: e.target.value } }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Product Submitted: ", product);
    // Add functionality to send `product` to a backend or API.
    try {
      const response = await axios.put(`${url}/edit/${productId}`, product);
      console.log("Product Added Successfully", response.data);
      alert("Product updated successfully!")
      getAllProduct();
    } catch (error) {
      console.error("Error Adding product", error.response?.data || error.message);
    }
  };
  //add kru ?

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title">Product Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "300px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="price">Price         :</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "300px" }}
          />
        </div>

        {/* <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image1">image1:</label>
          <input
            type="text"
            id="image1"
            name="image1"
            onChange={imageHandler}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "300px" }}
          />
        </div> */}
      
        {/* <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image2">image2:</label>
          <input
            type="text"
            id="image2"
            name="image2"
            onChange={imageHandler}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "300px" }}
          />
        </div> */}
     {/*images input fields */}
         {Array.from({ length: 10 }).map((_, index) => ( 
          <div key={index} style={{ marginBottom: "10px" }}> 
            <label htmlFor={`image${index + 1}`}>image{index + 1}:</label> 
            <input type="text" id={`image${index + 1}`} name={`image${index + 1}`} value={product.images[`image${index + 1}`] || ''} onChange={imageHandler} required style={{ marginLeft: "10px", padding: "5px", width: "300px" }} /> 
          </div> ))
          }



        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="desc"
            name="desc"
            value={product.desc}
            onChange={handleChange}
            required
            style={{
              marginLeft: "10px",
              padding: "5px",
              width: "300px",
              height: "80px",
            }}
          />
        </div>
        
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="category">Category    :</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "310px" }}
          >
            <option value="">Select Category</option>
            <option value="electronics">Cars</option>
            
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};


export default EditProduct


// new windowkyu niaa rii three finfgers ko swipe up kro .. tera chl rha h nn ?
