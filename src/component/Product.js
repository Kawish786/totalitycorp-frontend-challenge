import React, { useContext,useState } from 'react'
import ProductContext from '../Context/ProductContext'
import { Link } from 'react-router-dom';


function Product() {
    const context = useContext(ProductContext);
    const {data} = context;
    const [searchQuery, setSearchQuery] = useState("");
    const [men,setMen]=useState('Men')
    const [women,setWomen]=useState('Women')
    const [gold,setGold]=useState('gold')


    const [item,setItem]=useState(data)
    const handleSearch=(event)=>{
        setSearchQuery(event.target.value)
      }
      const handleMenChange=(event)=>{
        setMen(event.target.value)
      }
      const handleWomenChange=(event)=>{
        setWomen(event.target.value)
      }
      const handleGoldChange=(event)=>{
        setGold(event.target.value)
      }
      const handleClick=(event)=>{
        event.preventDefault()
        const filtered=item.filter((e)=>e.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setItem(filtered) 
      }
      const handleMen=(event)=>{
        event.preventDefault()
        const menFiltered=item.filter((e)=>e.title.toLowerCase().includes(men.toLowerCase()));
        setItem(menFiltered) 
      }
      const handleWomen=(event)=>{
        event.preventDefault()
        const womenFiltered=item.filter((e)=>e.title.toLowerCase().includes(women.toLowerCase()));
        setItem(womenFiltered) 
      }
      const handleGold=(event)=>{
        event.preventDefault()
        const goldFiltered=item.filter((e)=>e.title.toLowerCase().includes(gold.toLowerCase()));
        setItem(goldFiltered) 
      }


     

  return (
    <>
    <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><label onChange={handleMenChange}  className="nav-link" value={men} onClick={handleMen}>Men</label></li>
        <li className="nav-item"><label onChange={handleWomenChange} value={women} className="nav-link" onClick={handleWomen}>Women</label></li>
        <li className="nav-item"><label onChange={handleGoldChange} value={gold} className="nav-link" onClick={handleGold}>Gold</label></li>

        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" onChange={handleSearch} value={searchQuery} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={handleClick}  type="submit">Search</button>
      </form>
    </header>
  </div>
  
    <div className='bg-dark' style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
    {item.map((x)=>(
    <div className="card" key={x.id} style={{width:"19rem" , margin:"1rem",backgroundColor:"transparent",border:"1px solid seagreen"}}>
    <img style={{width:"10rem",height:"10rem",borderRadius:"50%",border:"1px solid seagreen",objectFit:"cover",marginLeft:"auto",marginRight:"auto"}} src={x.image} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title text-success">{x.title}</h5>
      <p className="card-text text-success">$ {x.price}</p>
      <Link to={`/single/${x.id}`}><label className="btn btn-light">Check Product</label></Link>
      {/* ABove replace spaces into dash in the url
        title.replace(/\s+/g, '-').toLowerCase()  it will replace space with hyphon in the url if title is used in link
       */}
    </div>
  </div>
    ))}
    </div>
    </>
  )
}

export default Product