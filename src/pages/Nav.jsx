import { Link } from "react-router-dom";

import Cart from "./Cart"
export default function Nav({setNavOpen,setCartItems,cartItems,setShowCart,showCart,isNavOpen}){
   
  return (
        <header className="primary_header">
    
    <nav className="container nav flex">
    <a className="logo" href="/">FurnitureFy</a>
    { isNavOpen && <ul className="nav_lists flex">
   <li className="nav_list"><Link to="/">Home</Link></li>
   <li className="nav_list"><Link to="/shop">Shop</Link></li>
   <li className="nav_list"><Link to="/about">About Us</Link></li>
   <li className="nav_list"><Link to="/contact">Contact</Link></li>
    </ul>}
  <Cart  setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />
  <button 
   onClick={()=>{
    setNavOpen(prev=>!prev)
   }}
   
  className="burger">
  <i className="fa-solid fa-bars"></i>
  </button>
    </nav>
  </header>
    )
}