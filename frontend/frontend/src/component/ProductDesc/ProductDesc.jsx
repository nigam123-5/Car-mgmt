import React from 'react'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useParams } from 'react-router-dom';
const ProductDesc = () => {
 
    const{allProduct,getAllProduct} = useContext(ProductContext)

  const {productId} = useParams();
 const Product = allProduct.find((e)=> e._id ===(productId));
 console.log(Product,"product")
 const images = Product.images
const image = images.img1
 console.log(image,"image",images)

  return (
    <div>
      <img src={`${image}`} alt="image oneeee" />
      <img src="https://www.pexels.com/photo/white-suv-on-a-scenic-indian-highway-29057945/" alt="image 222" />
      <h1>{Product.title}</h1>
      <p>{Product.desc}</p>
    {images[0] &&(
           images.map((img,index)=>{
            return(
                <img src={img} alt="imagesss" />
            )
          })
    )}
    </div>
  )
}

export default ProductDesc
