
import { Link } from "react-router-dom";

const NotFound = ()=>{
    return(
        <section className="Page-section">
            <h2 className="Page-header">404: The page you are looking for doesn't seem to exist.</h2>
            <p style={{fontSize: 28}}>Click <Link style={{color: "red"}} to="/">Here</Link> to go back to the home page</p>
        </section>
    )
};

export default NotFound;