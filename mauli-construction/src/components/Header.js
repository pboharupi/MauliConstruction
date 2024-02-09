import React from "react";
import Logo from "../images/Logo.jpg"
function Header()
{
    return(
    <div class="container bg-body-tertiary py-3 my-3 justify-content-center border border-light">
        <img src={Logo} style={{align:"left",width:"10%",height:"5%"}} class="img-fluid" alt="Responsive image"/>
        <h1 style={{textAlign:"center",marginTop:"-5%"}}>Mauli Construction</h1>
    </div>
)
}

export default Header;