/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Item.css";

const Item= ({addToCart})=>{
    const params=useParams();

    const [item,setItem] =useState({});
    const [numberOfItems,setNumberOfItems]=useState(0);
    const getItem= async ()=>{
        let response=await fetch('https://fakestoreapi.com/products/'+params.id.substring(1));
        let data=await response.json();
        setItem(data);
    }

    useEffect(()=>{
        getItem();
    },[]);


    const increment= ()=>{
        setNumberOfItems(numberOfItems+1);
    }

    const decrement= ()=>{
        if(numberOfItems>0)
            setNumberOfItems(numberOfItems-1);
    }

    const reset= ()=>{
        setNumberOfItems(0);
    }

    return(
        <div className="item-page" >
            <Navbar/>
            <div className="item-page-container" >
                <div className="item-page-inner-container" >
                    <img className="item-page-image" src={item.image} alt="nice" width="200px"/>
                    <div className="item-page-info" >
                        <div className="item-page-title" >{item.title}</div>
                        <div>{"Category: "+item.category}</div>
                        <div>{"Price: "+item.price+" LE"}</div>
                        <div>{item.description}</div>
                        <div className="item-page-payment" >
                            <button className="item-page-button" onClick={increment} >+</button>
                            <div  >{numberOfItems}</div>
                            <button className="item-page-button" onClick={decrement} >-</button>
                        </div>
                        <button className="item-page-button" onClick={()=>{addToCart(item,numberOfItems,item.price); reset()}} >Add To cart</button>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default Item;