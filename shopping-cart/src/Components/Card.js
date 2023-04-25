import { Link } from "react-router-dom";

const Card =({item})=>{
    return(
        <Link to={"/item/:"+item.id} >
            <div>
                <img src={item.image} alt="item-show" width="60px" />
                <div>{item.title}</div>
                <div>{item.category}</div>
                <div>{item.price}</div>
            </div>
        </Link>
    );
}

export default Card;