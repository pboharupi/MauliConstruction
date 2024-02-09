import React from "react";

import img1 from "../images/image1.jpg"
import ArjunNagarModal from "./ArjunNagarModal";

function ArjunNagarProject()
{
    return(
        <div class="panel panel-primary border border-light">
        <div class="panel-heading"  style={{textAlign:"center"}}>
          
         <img src={img1}></img>
        </div>
        <div class="panel-body" style={{marginTop:"-20px"}}>
            <div class="m-4">
            <h5 class="panel-title ">Arjun Nagar</h5>
            <p>
                Developing premium residential homes with high quality design and interior. Offers luxury and convenience all combined together in a single township.
            </p>
            </div>
        </div>
        <div class="panel-footer">
            <div class="m-4">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ArjunNagarModal">See All Images</button>
            </div>
        </div>
        <ArjunNagarModal id="ArjunNagarModal"></ArjunNagarModal>
    </div>
    
    )
}

export default ArjunNagarProject;