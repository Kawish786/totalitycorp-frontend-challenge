import React, {  useEffect, useState } from "react";
import './Single.css'
import { NavLink, useParams } from "react-router-dom";

function Single() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const callData = async () => {
        const result = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const x = await result.json();
        setProduct(x);
      };
      useEffect(() => {
        callData();
      }, []);


  return (
    <div className="about" id="about">
        <div className="div1">
            <img className="imgabout" style={{width:"300px",height:"300px",borderRadius:"50%"}}src={product.image} alt=""/>
        </div>
        <div className="div2">
            <h1 className="text-center text-dark">{product.title}</h1>
            <p className="text-center text-success">{product.description}</p>
            <h5>Price: $ {product.price}</h5>
            <NavLink to={`/cart/${product.id}`} ><button style={{margin:"10px"}} className="btn btn-outline-success">Add to Cart</button></NavLink>
            <NavLink to="/product" ><button style={{margin:"10px"}} className="btn btn-outline-success">Go to Listing</button></NavLink>
        </div>
    </div>
  )
}

export default Single