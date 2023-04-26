import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/About.css";
const About =()=>{
    return(
        <div className="about">
           <NavBar/>
           <div className="contact-container">
                <div className="container-card" >
                    <div className="title" >contact</div>
                    <div className="contact-info" >
                        <div>phone: 01062591395</div>
                        <div>email: mahmoud.ali1842001@gmail.com</div>
                    </div>
                </div>
            </div>
           <Footer/>
        </div>
    );
}

export default About;