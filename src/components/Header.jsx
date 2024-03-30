
import Navigation from "./Navigation";

const Header = ({className, isHome}) =>{
    return(
        <div className={className}>
            <Navigation />
            
            {isHome ? 
                <div className="Header-advert">
                    <h2>Application is open</h2>
                    <h3>Join Today To Develop</h3>
                </div> : null
            }
        </div>
    );
};


export default Header;