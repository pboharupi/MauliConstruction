import React from "react";

function CommercialFeatures()
{
    return(
        <div class="accordion" id="myCAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingCOne">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapseCOne">Designs & Drawings</button>
            </h2>
            <div id="ccollapseCOne" class="accordion-collapse collapse" data-bs-parent="#myCAccordion">
                <div class="card-body">
                    <p>3D Elevation </p>
                    <p>Architectural Layout | 2D </p>
                    <p>Basic Elevation </p>
                    <p>Structural Design </p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingCTwo">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapseCTwo">Structure</button>
            </h2>
            <div id="ccollapseCTwo" class="accordion-collapse collapse" data-bs-parent="#myCAccordion">
                <div class="card-body">
                    <p>Structure</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingCThree">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapseCThree">Kitchen</button>
            </h2>
            <div id="ccollapseCThree" class="accordion-collapse collapse" data-bs-parent="#myCAccordion">
                <div class="card-body">
                    <p>Bathroom</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingCFour">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapseCFour">Doors & Windows</button>
            </h2>
            <div id="ccollapseCFour" class="accordion-collapse collapse" data-bs-parent="#myCAccordion">
                <div class="card-body">
                    <p>Doors and windows</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingCFive">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapseCFive">Painting</button>
            </h2>
            <div id="ccollapseCFive" class="accordion-collapse collapse" data-bs-parent="#myCAccordion">
                <div class="card-body">
                    <p>Painting</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingCSix">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapseCSix">Flooring</button>
            </h2>
            <div id="ccollapseCSix" class="accordion-collapse collapse" data-bs-parent="#myCAccordion">
                <div class="card-body">
                    <p>Flooring</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingCSeven">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapseCSeven">Electrical</button>
            </h2>
            <div id="ccollapseCSeven" class="accordion-collapse collapse" data-bs-parent="#myCAccordion">
                <div class="card-body">
                    <p>Electrical</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CommercialFeatures;