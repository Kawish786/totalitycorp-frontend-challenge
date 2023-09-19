import React, { useContext,useState } from 'react'
import ProductContext from '../Context/ProductContext'
import { Link } from 'react-router-dom';


function Product() {
    const context = useContext(ProductContext);
    const {data} = context;
    const [searchQuery, setSearchQuery] = useState("");  /**        Search and Filter States */
    const [men,setMen]=useState('Men')
    const [women,setWomen]=useState('Women')
    const [gold,setGold]=useState('gold')


    const [filteredData, setFilteredData] = useState(data);
    //  Search input 
    const handleSearch=(event)=>{
      const query = event.target.value.toLowerCase()
        setSearchQuery(query)
        if (query === "") {
          setFilteredData(data); // Reset to original data when the query is empty
        } else {
          const filtered = data.filter((e) =>
            e.title.toLowerCase().includes(query)
          );
          setFilteredData(filtered);
        }
      }
      //men filter
      const handleMenChange=(event)=>{
        setMen(event.target.value)
      }
      const handleMen=(event)=>{
        event.preventDefault()
        const menFiltered=data.filter((e)=>e.title.toLowerCase().includes(men.toLowerCase()));
        setFilteredData(menFiltered) 
      }
      //women filter
      const handleWomenChange=(event)=>{
        setWomen(event.target.value)
      }
      const handleWomen=(event)=>{
        event.preventDefault()
        const womenFiltered=data.filter((e)=>e.title.toLowerCase().includes(women.toLowerCase()));
        setFilteredData(womenFiltered) 
      }
      //gold filter
      const handleGoldChange=(event)=>{
        setGold(event.target.value)
      }
      const handleGold=(event)=>{
        event.preventDefault()
        const goldFiltered=data.filter((e)=>e.title.toLowerCase().includes(gold.toLowerCase()));
        setFilteredData(goldFiltered) 
      }


     

  return (
    <>
    <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><label onChange={handleMenChange}   value={men}   className="btn btn-success" style={{margin:"5px"}} onClick={handleMen}>Men</label></li>
        <li className="nav-item"><label onChange={handleWomenChange} value={women} className="btn btn-success" style={{margin:"5px"}} onClick={handleWomen}>Women</label></li>
        <li className="nav-item"><label onChange={handleGoldChange}  value={gold}  className="btn btn-success" style={{margin:"5px"}} onClick={handleGold}>Gold</label></li>

        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" style={{marginLeft:"5px"}} onChange={handleSearch} value={searchQuery} type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </header>
  </div>
  
    <div className='bg-dark' style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
    {filteredData.map((x)=>(
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