/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
const Item= ({addToCart})=>{
    const params=useParams();

    const [item,setItem] =useState({});

    const getItem= async ()=>{
        let response=await fetch('https://fakestoreapi.com/products/'+params.id.substring(1));
        let data=await response.json();
        setItem(data);
    }

    useEffect(()=>{
        getItem();
    },[]);

    return(
        <div>
            <Navbar/>
            <div>
                <img src={item.image} alt="nice" width="200px"/>
                <div>
                    <div>{item.title}</div>
                    <div>{item.category}</div>
                    <div>{item.price}</div>
                    <div>{item.description}</div>
                    <div>
                        <div>+</div>
                        <div>-</div>
                        <button onClick={()=>addToCart(item,1,item.price)} >Add To cart</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default Item;