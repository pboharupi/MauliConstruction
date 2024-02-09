import React from "react";
import CommercialFeatures from "./CommercialFeatures";
function Commercial()
{
    return(
        <div class="panel panel-primary border border-light">
        <div class="panel-heading"  style={{textAlign:"center", color:"white",backgroundColor:"#CC0066"}}>
            <h5 class="panel-title">Commercial</h5>
            <h7 class="panel-title">Rs. 3000/sq.ft.</h7>
        </div>
        <div class="panel-body" style={{marginTop:"-23px"}}>
            <div class="m-4">
              <CommercialFeatures />
            </div>
        </div>
    </div>
    )
}

export default Commercial;