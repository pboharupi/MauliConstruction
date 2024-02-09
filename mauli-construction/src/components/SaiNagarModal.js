import React from "react";
import img1 from "../images/image15.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image10.jpg";
function SaiNagarModal() {
  return (
    <div class="modal fade" id="SaiNagarModal" tabIndex="-1" aria-labelledby="saiModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="saiModalLabel">Sai Nagar Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style={{ textAlign: "center" }}>

            <div id="saiSlide" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#saiSlide" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#saiSlide" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#saiSlide" data-bs-slide-to="2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img1} alt="Los Angeles" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                  <img src={img2} alt="Chicago" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                  <img src={img3} alt="New York" class="d-block w-100"/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#saiSlide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#saiSlide" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaiNagarModal;