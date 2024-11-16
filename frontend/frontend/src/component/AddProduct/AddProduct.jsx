import React, { useContext, useState } from "react";
import './AddProduct.css'
import axios from 'axios'
import { ProductContext } from "../../context/ProductContext";


const AddProduct = () => {

  const {url} = useContext(ProductContext)
  const [product, setProduct] = useState({
    title: "",
    price: "",
    desc: "",
    images:{},
    // data base banaye tya nhi abhi

  });

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
      const response = await axios.post(`${url}/add`, product);
      console.log("Product Added Successfully", response.data);
      alert("Product added successfully!")
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
            <input type="text" id={`image${index + 1}`} name={`image${index + 1}`} onChange={imageHandler} required style={{ marginLeft: "10px", padding: "5px", width: "300px" }} /> 
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


export default AddProduct


// new windowkyu niaa rii three finfgers ko swipe up kro .. tera chl rha h nn ?
