import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <img className="logofatimabenzaoui" src="/myReactApp/logofatimabenzaoui.png" title="Dans impossible, il y a toujours un possible !" alt="Logo Fatima Benzaoui"></img>
            <span className="navbar-brand text-primary mr-auto">myReactApp</span>
            <div className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <i className="fa fa-bars text-primary"></i>
            </div>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto" id="navbar">
                    <li className="nav-item"><Link className="nav-link" to="/myReactApp/">nasaStellarApp</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/myReactApp/todolistapp">todoListApp</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/myReactApp/twitterapp">twitterApp</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/myReactApp/bases">Bases</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
