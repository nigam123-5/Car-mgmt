import { createContext, useEffect } from "react";
import { useState } from "react";
import axios, { all } from 'axios'

export const ProductContext = createContext(null);





 
const ProductContextProvider = (props) => {
    
const [allProduct,setallProduct] = useState([]) 
console.log(allProduct,"allProduct")
const url = 'https://car-mgmt.onrender.com/api'



 
const getAllProduct = async()=>{
    axios.get(`${url}/find`)
    .then((response) => {
        setallProduct(response.data.product);
    })
    .catch((error) => {
        console.error("There was an error fetching the products", error);
    }); 
}



  
useEffect(()=>{
    getAllProduct()  
      
},[])









 

   const contextValue = {allProduct, getAllProduct,url}
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;