import Nav from "../Nav"
export default function Hero({ setCartItems,cartItems,setShowCart,showCart, isNavOpen,setNavOpen}){
  
    return(
        <>
        <div className="combine">
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />
        <section className="hero_section">
     <div className="container hero">
        <h1 className="hero-title">Make Your Interior More Minimilastic And More Modern</h1>
          <p className="hero-para">Turn your room panto into a lot more minimalist and modern with ease and speed</p>
     </div>
        </section>
        </div>
        </>
    )
}