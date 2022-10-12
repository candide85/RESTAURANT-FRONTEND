import React from 'react'
import 'antd/dist/antd.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import ItemsPage from './pages/ItemsPage'
import CartPage from './pages/CartPage'


// import 'bootstrap/dist/css'
// import 'mdbootstrap/css/mdb.css'
// import 'mdbootstrap/css/bootstrap.css'
// import 'mdbootstrap/css/style.css'


function App() {
  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<ItemsPage />} />         
          <Route path='/cart' element={<CartPage />} />         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

