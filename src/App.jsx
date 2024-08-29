import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
    
     <Routes>
      <Route path ='/'element={  <Home />} />
      <Route path ='/cart'element={  <Cart /> } />
      <Route path ='/wishlist'element={   <Wishlist /> } />
     </Routes>
     <Footer />
    
   
    </>
  )
}

export default App
