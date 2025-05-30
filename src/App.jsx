import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import TractorCategory from './pages/TractorCategory' 
import TractorModel from './pages/TractorModel'
import DealerLocator from './pages/DealerLocator'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/tractor-category/:seriesId" element={<TractorCategory/>} />
        <Route path="/tractor-model/:modelId" element={<TractorModel/>} />
        <Route path='/dealer-locator' element={<DealerLocator/>} />
      </Routes>
  )
}

export default App