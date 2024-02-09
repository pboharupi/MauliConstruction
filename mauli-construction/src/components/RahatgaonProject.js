import React from "react";

import img1 from "../images/image14.jpg";
import RahatgaonModal from "./RahatgaonModal";

function RahatgaonProject(){
    return(
        <div class="panel panel-primary border border-light">
        <div class="panel-heading"  style={{textAlign:"center"}}>
          
         <img src={img1}></img>
        </div>
        <div class="panel-body" style={{marginTop:"-20px"}}>
            <div class="m-4">
            <h5 class="panel-title ">Rahatgaon</h5>
            <p>
                Developed commercial complex with 100 shops equipped with high class amenities including escalator, power backup, security alarms, etc.
            </p>
            </div>
        </div>
        <div class="panel-footer">
            <div class="m-4">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#RahatgaonModal">See All Images</button>
            </div>
        </div>
        <RahatgaonModal id="RahatgaonModal"></RahatgaonModal>
    </div>
    )
}

export default RahatgaonProject;