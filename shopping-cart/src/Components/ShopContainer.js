import { useEffect, useState } from "react"
import Card from "./Card";

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
        <div>
            {items.map((item)=><Card item={item} key={item.id}/>)}
        </div>
    );
}

export default ShopContainer;
