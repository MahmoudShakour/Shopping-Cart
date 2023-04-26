import { Link } from "react-router-dom";
import "../Styles/Card.css";

const Card =({item})=>{
    return(
        <Link className="link" to={"/item/:"+item.id} >
            <div className="card" >
                <img src={item.image} alt="item-show" width="60px" />
                <div className="info">
                    <div>{item.title}</div>
                    <div>{"category: "+item.category}</div>
                    <div>{"Price: "+item.price+" LE"}</div>
                </div>
            </div>
        </Link>
    );
}

export default Card;