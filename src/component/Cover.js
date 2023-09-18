import React from 'react'
import { NavLink } from 'react-router-dom'
import './Cover.css'

function Cover() {
  return (
    <div className='cover'>
        <main className="container" >
    <h1 className='text-success'>Best Fashion</h1>
    <p className="lead">Communication is a two-way street. We spend a lot of time strategizing what we say to our customers, but we need to spend just as much time listening to understand our customers</p>
    <p className="lead">
      <NavLink to="/product"><button className="btn btn-lg btn-light fw-bold border-dark bg-white">Products</button></NavLink>
    </p>
  </main>
    </div>
  )
}

export default Cover