import React from "react";

function ResidentialPremiumFeatures()
{
    return(
        <div class="accordion" id="myPAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingPOne">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapsePOne">Designs & Drawings</button>
            </h2>
            <div id="ccollapsePOne" class="accordion-collapse collapse" data-bs-parent="#myPAccordion">
                <div class="card-body">
                    <p>3D Elevation </p>
                    <p>Architectural Layout | 2D </p>
                    <p>Basic Elevation </p>
                    <p>Structural Design </p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingPTwo">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapsePTwo">Structure</button>
            </h2>
            <div id="ccollapsePTwo" class="accordion-collapse collapse" data-bs-parent="#myPAccordion">
                <div class="card-body">
                    <p>Structure</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingPThree">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapsePThree">Kitchen</button>
            </h2>
            <div id="ccollapsePThree" class="accordion-collapse collapse" data-bs-parent="#myPAccordion">
                <div class="card-body">
                    <p>Bathroom</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingPFour">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapsePFour">Doors & Windows</button>
            </h2>
            <div id="ccollapsePFour" class="accordion-collapse collapse" data-bs-parent="#myPAccordion">
                <div class="card-body">
                    <p>Doors and windows</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingPFive">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapsePFive">Painting</button>
            </h2>
            <div id="ccollapsePFive" class="accordion-collapse collapse" data-bs-parent="#myPAccordion">
                <div class="card-body">
                    <p>Painting</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingPSix">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapsePSix">Flooring</button>
            </h2>
            <div id="ccollapsePSix" class="accordion-collapse collapse" data-bs-parent="#myPAccordion">
                <div class="card-body">
                    <p>Flooring</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingPSeven">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ccollapsePSeven">Electrical</button>
            </h2>
            <div id="ccollapsePSeven" class="accordion-collapse collapse" data-bs-parent="#myPAccordion">
                <div class="card-body">
                    <p>Electrical</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ResidentialPremiumFeatures;