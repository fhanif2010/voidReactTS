import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ProductDetailPage from './pages/ProductDetailPage'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='*' element={<NotFound />}/>

        {/* Route dynamic / Router yang mengikuti kategori pilihan */}
        <Route path='/productdetail/:productSlug' element={<ProductDetailPage />} />
      </Routes>
    </>
  )
}

export default App
