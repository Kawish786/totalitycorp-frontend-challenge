import React from 'react'
import Nav from '../component/Nav'
import Cover from '../component/Cover'
import Product from '../component/Product'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from '../component/Cart'
import Single from '../singleProduct/Single'

export default function Home() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single/:productId" element={<Single />} />
        <Route path="/cart/:cartId" element={<Cart />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}
