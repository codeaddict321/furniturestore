import Nav from "../Nav"

export default function About({setCartItems,cartItems,setShowCart,showCart,setNavOpen,isNavOpen}){
    return (
        <>
       <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart}/>
  <section className="about">
    <div className="container flex about-section">
    <div className="about-img">
        <img src="images/about-img.svg" alt="" />
       </div>
       <div className="about-info">
    <h2 className="about-info-title">About Us</h2>
    <p className="about-info-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque tempore unde aspernatur quibusdam iusto esse facere enim, quo cupiditate temporibus eveniet rerum! Architecto dolor saepe laborum velit neque.
    </p>
    <button className="about-btn">
        Read More...
    </button>
       </div>
      
    </div>

  </section>
  </>
    )
}