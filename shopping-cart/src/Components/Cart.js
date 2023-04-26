import Footer from "./Footer";
import Navbar from "./NavBar";
import "../Styles/Cart.css";

const Cart =({cartItems,totalPrice,clearCart})=>{
    if(totalPrice===0){
        return(
            <div className="cart" >
                <Navbar/>
                <div className="no-items-container" >
                    You added nothing to the Cart
                </div>
                <Footer/>
            </div>
        );
    }
    return(
        <div className="cart" >
            <Navbar/>
            <div className="cart-items-container" >
                {
                    cartItems.map((item,index)=>{
                        return(
                            <div key={index} className="item-container" >
                                <img className="cart-item-image" src={item.addedItem.image} alt="nice" width="200px"/>
                                <div className="info" >
                                    <div>{item.addedItem.title}</div>
                                    <div>{"Category: "+item.addedItem.category}</div>
                                    <div>{"Price: "+(item.addedItem.price)+" LE"}</div>
                                    <div>{"quantity: "+item.quantity}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="payment" >
                <div>{"Total Price: " + Math.round(totalPrice)+" LE"}</div>
                <button onClick={clearCart} >
                    Purchase
                </button>
                <button onClick={clearCart} >
                    Clear Cart
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default Cart;