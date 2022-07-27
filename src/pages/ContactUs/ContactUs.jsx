import Nav from "../Nav"

export default function ContactUs({isNavOpen , setNavOpen,setCartItems,cartItems,setShowCart,showCart}){
    return (
        <>
         <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />
         <section className="contact">
  <div className="container flex contact-section">
  <div className="contact-img">
        <img src="src/images/contact-img.svg" alt="" />
    </div>
    <div className="contact-info">
        <h2 className="contact-info-title">
            Contact Us
        </h2>
        <form>
            <div>
            <label htmlFor="name">Name: </label>
      <input type="text"  id="name" placeholder="Name" />
            </div>
            <div>

            <label htmlFor="email">Email: </label>
      <input type="email"  id="email" placeholder="Email" />
            </div>
            <div>
                <p>Your Message:</p>
            <textarea placeholder="Your Message" name="contact-message" id="contact-message" cols="20" rows="8"></textarea>
            </div>
     <button>
        Submit
     </button>
  
        </form>
    </div>
   
  </div>
        </section>
        </>
       
    )
}