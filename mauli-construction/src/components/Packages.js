import React from "react";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image14.jpg";
import ResidentialBasic from "./ResidentialBasic";
import ResidentialPremium from "./ResidentialPremium";
import Commercial from "./Commercial";

function Packages() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                  <ResidentialBasic />
                </div>
                <div class="col-sm-4">
                    <ResidentialPremium />
                </div>
                <div class="col-sm-4">
                    <Commercial />
                </div>
            </div>
        </div>
    )
}

export default Packages;