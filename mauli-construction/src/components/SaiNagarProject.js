import React from "react";

import img1 from "../images/image2.jpg";
import SaiNagarModal from "./SaiNagarModal";

function SaiNagarProject(){
    return(
        <div class="panel panel-primary border border-light">
        <div class="panel-heading"  style={{textAlign:"center"}}>
          
         <img src={img1} style={{width:206,height:206}}></img>
        </div>
        <div class="panel-body" style={{marginTop:"-20px"}}>
            <div class="m-4">
            <h5 class="panel-title ">Sai Nagar</h5>
            <p>
            Developing premium residential homes with high quality design and interior. Offers luxury and convenience all combined together in a single township.
            </p>
            </div>
        </div>
        <div class="panel-footer">
            <div class="m-4">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SaiNagarModal">See All Images</button>
            </div>
        </div>
        <SaiNagarModal id="SaiNagarModal"></SaiNagarModal>
    </div>
    )
}

export default SaiNagarProject;