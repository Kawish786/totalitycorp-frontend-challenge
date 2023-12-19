
import { useState ,useEffect} from "react";
import ProductContext from "./ProductContext";


const ProductData =(props)=>{
    const [data,setData]= useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await fetch("https://fakestoreapi.com/products/");
            const x = await result.json();
            setData(x);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
      
     
    return(
        <ProductContext.Provider value={{data}}>
            {props.children}
        </ProductContext.Provider>   
    )
}

export default ProductData;