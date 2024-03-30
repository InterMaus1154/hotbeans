
import { Link } from "react-router-dom";

const Footer = () =>{
    return( 
    <footer>
        <h5>Hot Beans Web 2022</h5>
        <h5>
            <Link to="/contact" title="contact">Contact</Link>
        </h5>
    </footer>
    );
};

export default Footer;