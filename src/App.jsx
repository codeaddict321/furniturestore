
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useState,useEffect} from "react"

import Home from "./pages/Home/Home"
import Footer from "./pages/Footer/Footer"
import Shop from "./pages/Shop/Shop"
import items from "./data/db"
import About from "./pages/about/About"
import ContactUs from "./pages/ContactUs/ContactUs"

function App() {

 const [isNavOpen,setNavOpen] = useState(false)
 const [cartItems,setCartItems] = useState([])
 const [showCart,setShowCart] = useState(false)
 


 





  return (
    
    <Router>

      <Routes>
     
  <Route path="/"  element={ <Home isNavOpen={isNavOpen} setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart}   />}/>
     <Route path="/shop" element={<Shop isNavOpen={isNavOpen} setNavOpen={setNavOpen} items={items}  setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />} />
   <Route path="/about" element={<About isNavOpen={isNavOpen} setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />}   />
     <Route path="/contact" element={<ContactUs isNavOpen={isNavOpen} setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />}/>
      </Routes>
      <Footer />
    </Router>
  

  
  
  
  
  )
}

export default App
