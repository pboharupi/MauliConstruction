import React from "react";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image14.jpg";

function AboutUs() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <p><h3>We construct your dream home.</h3></p>
          <p><h3>You track progress on your mobile.</h3></p>
        </div>
        <div class="col-sm-6">
          <img src={img1} style={{ width: 150, height: 150 }}></img>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <p><span class="fa fa-check"></span><h7> 300+ constructed home</h7></p>
          <p><span class="fa fa-check"></span><h7> Quality of material used for development</h7></p>
          <p><span class="fa fa-check"></span><h7> Customer Satisfaction is achieved</h7></p>
        </div>
        <div class="col-sm-6">
          <img src={img2} style={{ width: 150, height: 150 }}></img>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;