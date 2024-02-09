import React from "react";

import Address from "./Address";
import Enquiry from "./Enquiry";

function ContactUs()
{
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-5">
                  <Address />
                </div>
                <div class="col-sm-5">
                    <Enquiry />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;