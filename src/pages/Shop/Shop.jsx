
import Nav from "../Nav";
import { Link } from "react-router-dom";
export default function Shop({setNavOpen,isNavOpen,items,setCartItems,cartItems,setShowCart,showCart}){
   
    return (
<main>
<Nav isNavOpen={isNavOpen}setNavOpen={setNavOpen} setCartItems={setCartItems} cartItems={cartItems} setShowCart={setShowCart} showCart={showCart} />
<section>
            
            <div className="container" id="shop">
<h2 className="shop-title">Buy Our Furniture</h2>


            <ul className="grid shop-items">
            {items.map(item=>{
                return <li className="shop-item" key={item.id} id={item.id}>
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <p>{`Price ${item.price}Rs`}</p>
                    <button
                    onClick={(e)=>{
                          const clickedItemId = e.target.parentElement.id;
                      const clickedItem = items.find(item=>item.id === parseInt(clickedItemId))
                    const isExist=  cartItems.find(item=>{
                          return item.id === clickedItem.id
                      })

                    if(isExist == null)  {
                        setCartItems([...cartItems,clickedItem])
                    }else{
                       const filterItems = cartItems.filter(item=>item.id != isExist.id)
                     
                        const quantity = isExist.quantity ? {quantity:isExist.quantity+1}:{quantity:2}
                        const newItem = {...clickedItem,price:isExist.price,...quantity}
                    
                        setCartItems([...filterItems,newItem]);
                    }
                  //  
                
                    //  
                       
                    }}
                    >Add To Cart</button>
                
                </li>
            })}
        </ul>
            </div>
        </section>
</main>
     
        
    )
}