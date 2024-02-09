import React from "react";

import ArjunNagarProject from "./ArjunNagarProject";
import RahatgaonProject from "./RahatgaonProject";
import SaiNagarProject from "./SaiNagarProject";

function Projects()
{
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                  <ArjunNagarProject />
                </div>
                <div class="col-sm-4">
                    <RahatgaonProject />
                </div>
                <div class="col-sm-4">
                    <SaiNagarProject />
                </div>
            </div>
        </div>
    )
}

export default Projects;