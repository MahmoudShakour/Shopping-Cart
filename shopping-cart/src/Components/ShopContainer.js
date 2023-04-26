import { useEffect, useState } from "react"
import Card from "./Card";
import "../Styles/ShopContainer.css";

const ShopContainer= ()=>{

    const [items,setItems]=useState([]);

    const getItems = async ()=>{
        let response= await fetch("https://fakestoreapi.com/products");
        let data=await response.json();
        setItems(data);
    }

    useEffect(()=>{
        getItems();
    },[]);

    return(
        <div className="container">
            {items.map((item)=><Card item={item} key={item.id}/>)}
        </div>
    );
}

export default ShopContainer;
