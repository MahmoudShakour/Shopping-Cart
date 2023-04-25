import { Link } from "react-router-dom";


const Navbar =()=>{

    return(
        <div>
            <div>YS Boutique</div>
            <div>
                <Link to="/" >
                    <div>shop</div>
                </Link>
                <Link to="/cart">
                    <div>cart</div>
                </Link>
                <Link to="/about">
                    <div>about</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;