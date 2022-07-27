import formatter from "../currencyFormatter";

export default function Cart({setCartItems,cartItems,setShowCart,showCart}){
 const total =   cartItems.map((item)=>{
        if(!item.quantity) return item.price
        return item.quantity * item.price
    },0) 
 .reduce((sum,value)=>{
   return sum+value
 },0)
   
   function deleteItem(e){
   const deleteId = e.target.closest('.cart_item').dataset.id;
   const newItems = cartItems.filter(i=>i.id !==parseInt(deleteId))
  
   setCartItems(newItems)
   
   }
   
    return(
        <div className="cart">
            <button className="cart-logo"
            onClick={()=>{
                setShowCart(prev=>!prev)
            }}
            >
            <i className="fa-solid fa-cart-shopping">
               
               </i>
            </button>
            
            <p className="cart-nums">
                  {cartItems.length}
                </p>
                {
                    
                    showCart &&  
                    <ul className="cart_items">   
                    <div className="cart-total"><p>Total Price: {formatter.format(total)} Rs</p></div> 
                 
                
 {!cartItems.length ? <p>Cart Is Empty</p>:cartItems.map(item=>{

  return (
   
   
    <li className="cart_item" key={item.id} data-id={item.id}>
      <img className="cart_item-img" src={item.img} alt="img" />
        <h3 className="cart_item-title">{item.title}</h3>
        <p className="cart_item-para">{`Item Price: ${formatter.format(item.quantity ? 
        (item.price)*(item.quantity): item.price)}`}</p>
        {item.quantity && <p>Quantity: {item.quantity}</p>}
         <button onClick={deleteItem}>Delete</button>
  </li>
 
  )
 })}
  </ul>
                }
               

        </div>
    )
}