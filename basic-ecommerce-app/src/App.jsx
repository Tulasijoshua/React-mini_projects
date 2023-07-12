import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Shop from './pages/shop/Shop'
import Women from './pages/women/Women'
import Men from './pages/men/Men'
import Children from './pages/children/Children'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Cart from './pages/cart/Cart'
import ShopContextProvider from './context/ShopContext'
import SingleProduct from './pages/singleProduct/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        
        <Navbar />
        <div className="rout">
        <SideBar />
        <Routes>
        {/* <Route render={({ location }) => (
        location.pathname !== '/singleproduct/:id' && <SideBar />
      )} /> */}
            <Route path="/" element={<Shop />} />
            <Route path="women" element={<Women />} />
            <Route path="men" element={<Men />} />
            <Route path="children" element={<Children />} />
            <Route path='cart' element={<Cart />} />
            <Route path='singleproduct/:id' element={<SingleProduct />} />
          {/* <Route path='*' element={<ErrorPage />} /> */}
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
