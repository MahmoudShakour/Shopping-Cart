import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const Navbar =()=>{

    return(
        <div className="nav-bar" >
            <div className="title" >YS Boutique</div>
            <div className="links" >
                <Link className="link" to="/" >
                    <div>shop</div>
                </Link>
                <Link className="link" to="/cart">
                    <div>cart</div>
                </Link>
                <Link className="link" to="/about">
                    <div>about</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;