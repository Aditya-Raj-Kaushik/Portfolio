import React from "react";
import "../public/nav.css";

function Header() {
    return (
        <div >
            <ul className="header">
                <li className="id">ARK</li>
                <li>
                    <ul className="nav-list">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
              </li>
            </ul>           
        </div>
    );
}

export default Header;
