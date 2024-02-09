import React from "react";

function ResidentialBasicFeatures()
{
    return(
        <div class="accordion" id="myBAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingBOne">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseBOne">Designs & Drawings</button>
            </h2>
            <div id="collapseBOne" class="accordion-collapse collapse" data-bs-parent="#myBAccordion">
                <div class="card-body">
                    <p>3D Elevation </p>
                    <p>Architectural Layout | 2D </p>
                    <p>Basic Elevation </p>
                    <p>Structural Design </p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingBTwo">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseBTwo">Structure</button>
            </h2>
            <div id="collapseBTwo" class="accordion-collapse collapse" data-bs-parent="#myBAccordion">
                <div class="card-body">
                    <p>Structure</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingBThree">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseBThree">Kitchen</button>
            </h2>
            <div id="collapseBThree" class="accordion-collapse collapse" data-bs-parent="#myBAccordion">
                <div class="card-body">
                    <p>Bathroom</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingBFour">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseBFour">Doors & Windows</button>
            </h2>
            <div id="collapseBFour" class="accordion-collapse collapse" data-bs-parent="#myBAccordion">
                <div class="card-body">
                    <p>Doors and windows</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingBFive">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseBFive">Painting</button>
            </h2>
            <div id="collapseBFive" class="accordion-collapse collapse" data-bs-parent="#myBAccordion">
                <div class="card-body">
                    <p>Painting</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingBSix">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseBSix">Flooring</button>
            </h2>
            <div id="collapseBSix" class="accordion-collapse collapse" data-bs-parent="#myBAccordion">
                <div class="card-body">
                    <p>Flooring</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingBSeven">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseBSeven">Electrical</button>
            </h2>
            <div id="collapseBSeven" class="accordion-collapse collapse" data-bs-parent="#myBAccordion">
                <div class="card-body">
                    <p>Electrical</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ResidentialBasicFeatures;