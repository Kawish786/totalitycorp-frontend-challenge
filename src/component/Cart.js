import React, {  useEffect, useState } from "react";
import { Plus, Minus, Trash, CopyX } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";


function Cart() {
  const { cartId } = useParams();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  const callData = async () => {
    const result = await fetch(
      `https://fakestoreapi.com/products/${cartId}`
    );
    const x = await result.json();
    setProduct(x);
  };
  useEffect(() => {
    callData();
  }, []);
  useEffect(() => {
    // Update subtotal  price whenever count or product changes
    if (product) {
      const newSubTotalPrice = product.price * count;
      setSubTotalPrice(newSubTotalPrice);
    }
  }, [product, count]);
  //delete query
  const deleteData=(id)=>{
    const newProduct=(e)=>{return e.cartId !== id}
    setProduct(newProduct)
  }
  const handleIncrease = () => {
    setCount(count + 1);
  }
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  //using localstorage
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(product))
  },[product])

  if(!product){
    return(
      <>
      <h3 className="text-danger" style={{marginTop:"10px"}}>Cart is Empty</h3>
      <div className="text-danger"><CopyX /></div>
      <div>
        <NavLink to='/product'><button style={{marginTop:"9rem"}} className="btn btn-outline-primary align-item-center"> Continue Shopping</button></NavLink>
      </div>
      </>
    )
  }
  return (
    <>
      <h1 className="text-success">Cart Items</h1>
      <div
        className="row d-flex justify-content-center align-items-center "
        style={{
          borderBottom: "1px solid black",
          margin: "5rem",
          padding: "10px",
        }}
      >
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={product.image}
            className="img-fluid rounded-3"
            alt=""
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "10px",
            }}
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <p className="lead fw-normal mb-1" style={{ margin: "5px" }}>
            {product.title}
          </p>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            className="btn btn-link px-2"
            
          >
            <Minus onClick={handleDecrease}/>
          </button>

          <input
           
            
            name="quantity"
            value={count}  readOnly
            type="text"
            className="form-control form-control-sm text-center"
          />

          <button
            className="btn btn-link px-2"
            
          >
            <Plus onClick={handleIncrease}/>
          </button>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 offset-lg-1">
          <h5 className="mb-0" style={{ marginTop: "5px" }}>
            $ {subTotalPrice}
          </h5>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-center">
          <label className="text-danger" style={{ marginTop: "5px" }} >
            <Trash onClick={()=>deleteData(product.cartId) } style={{cursor:"pointer"}}/>
          </label>
        </div>
      </div>
      <div>
        <NavLink to='/product'><button className="btn btn-outline-primary"> Continue Shopping</button></NavLink>
      </div>
      <div style={{display:"flex",flexDirection:"column",backgroundColor:"black",marginTop:"2rem",border:"1px solid seagreen",width:"15rem",marginLeft:"5rem",padding:"5px"}}>
        <h5 className="text-primary" style={{borderBottom:"1px solid seagreen",margin:"15px"}}>Total Amount : $ {subTotalPrice}</h5>
        <button className="btn btn-primary" style={{margin:"10px" ,width:"9rem",marginLeft:"auto",marginRight:"auto"}}>Checkout</button>
      </div>
    </>
  );
}

export default Cart;
