
const Cart =({cartItems,totalPrice,clearCart})=>{

    return(
        <div>
            <div>{"total price: " +totalPrice}</div>
            <div>
                {
                    cartItems.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.addedItem.image} alt="nice" width="200px"/>
                                <div>{item.addedItem.title}</div>
                                <div>{item.addedItem.category}</div>
                                <div>{item.addedItem.price}</div>
                                <div>{item.addedItem.description}</div>
                                <div>{item.quantity}</div>
                            </div>
                        );
                    })
                }
            </div>
            <button onClick={clearCart} >
                Purchase
            </button>
        </div>
    );
}

export default Cart;