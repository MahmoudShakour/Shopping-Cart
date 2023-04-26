import React, { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Shop from "./Shop";
import Cart from "./Cart"; 
import About from "./About";
import Item from "./Item";
import "../Styles/App.css";

const App =()=>{
    const [totalPrice,setTotalPrice]=useState(0);
    const [numberOfCartItems,setNumberOfCartItems]=useState(0);
    const [cartItems,setCartItems]=useState([]);

    const addToCart= (addedItem,quantity,price)=>{
        let inCart=false;
        let newCartItems=cartItems.map((item)=>{
            
            if(item.addedItem.id===addedItem.id){
                item.quantity+=quantity;
                inCart=true;
            }
            return item;
        });

        if(!inCart)
            setCartItems([...cartItems,{addedItem:addedItem,quantity:quantity}]);
        else
            setCartItems(newCartItems);
        
        setNumberOfCartItems(numberOfCartItems+quantity);
        setTotalPrice(totalPrice+quantity*price);
    }

    const clearCart= ()=>{
        setCartItems([]);
        setNumberOfCartItems(0);
        setTotalPrice(0);
    } 

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/cart" element={<Cart cartItems={cartItems} totalPrice={totalPrice} clearCart={clearCart}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/item/:id" element={<Item addToCart={addToCart}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;