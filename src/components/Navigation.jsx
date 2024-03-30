

import MenuBtn from "../assets/pictures/arrow.ico";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useRef } from "react";

const Navigation = () =>{

    const nav = useRef(null);
    const menuBtn = useRef(null);

    const toggleMenu = () =>{
        nav.current.classList.toggle("nav-active");
        menuBtn.current.classList.toggle("rotate-btn");
    };

    return(
        <div className="Navigation--component">
            <h1 id="Page-title">
                <Link to="/" title="Home">Hot Beans Web</Link>
            </h1>
            <button ref={menuBtn} onClick={()=>{toggleMenu()}} id="Menu-btn" title="Open menu">
                <span></span>
                <span></span>
                <span id="hidden-span"></span>
                <span></span>
                </button>
            <nav ref={nav}>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/members">Members</CustomLink>
                    <CustomLink to="/services">Services</CustomLink>
                    <CustomLink to="/courses">Courses</CustomLink>
                    <CustomLink to="/application">Application</CustomLink>
                    <CustomLink to="/contact">Contact Us</CustomLink>
                </ul>
            </nav>
            
        </div>
    );
};

export default Navigation;


function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} title={children}>{children}</Link>
        </li>
    );
}

/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="currentColor"></path> </svg>* */