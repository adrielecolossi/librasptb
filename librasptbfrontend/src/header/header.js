import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function HeaderOne(props){
let isLoggedIn=props.login
let pagLogin= props.pagLogin
    if (isLoggedIn=== true) {
        return <header><p>oi</p></header>
      } else{
          if(pagLogin===true){
            return(
                <header>
        
                <nav>
             <img
                  className="top-image"
                  src="/images/logo.png"
                  alt="Logo do LIBRASPTB"
                />
                <ul className="top-menu">        
                <li className="top-menu-item">Contato</li>
                
                </ul>
                </nav>
        
                </header>
            )
          } else{
        return(
            <header>
    
            <nav>
         <img
              className="top-image"
              src="/images/logo.png"
              alt="Logo do LIBRASPTB"
            />
    
            <ul className="top-menu">
            <li className="top-menu-item">
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                {" "}
                Login
              </Link></li>
              
            <li className="top-menu-item">
            <Link to="/contato" style={{ textDecoration: "none", color: "black" }}>
                {" "}
                Contato
              </Link></li>
            
            </ul>
            </nav>
    
            </header>
        )
          }
    }

    
}