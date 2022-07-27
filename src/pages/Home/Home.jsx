import Hero from "./Hero";
import WhyUs from "./WhyUs";

export default function Home({setCartItems,cartItems,setShowCart,showCart,isNavOpen,setNavOpen}){
  
    return (
        <>
        <Hero isNavOpen={isNavOpen} setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />
        <WhyUs />
        </>
    )
}