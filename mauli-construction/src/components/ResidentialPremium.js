import React from "react";
import ResidentialFeatures from "./ResidentialPremiumFeatures";
function ResidentialPremium()
{
    return(
        <div class="panel panel-primary border border-light">
        <div class="panel-heading" style={{textAlign:"center", color:"white",backgroundColor:"#CC0066"}}>
            <h5 class="panel-title">Residential</h5>
            <h7 class="panel-title">Premium - Rs. 2500/sq.ft.</h7>
        </div>
        <div class="panel-body" style={{marginTop:"-23px"}}>
            <div class="m-4">
              <ResidentialFeatures />
            </div>
        </div>
    </div>
    )
}

export default ResidentialPremium;