import { createContext, useEffect } from "react";
import { useState } from "react";
import axios, { all } from 'axios'

export const ProductContext = createContext(null);





 
const ProductContextProvider = (props) => {
    
const [allProduct,setallProduct] = useState([]) 
console.log(allProduct,"allProduct")




 
const getAllProduct = async()=>{
    axios.get("http://localhost:4000/api/find")
    .then((response) => {
        setallProduct(response.data.product);
    })
    .catch((error) => {
        console.error("There was an error fetching the Thater", error);
    }); 
}



  
useEffect(()=>{
    getAllProduct()  
      
},[])









 

   const contextValue = {allProduct, getAllProduct}
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;