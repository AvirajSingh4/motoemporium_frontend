import React from "react"
import './Footer.css'

function Footer(){
    return(
<footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span><h3> <b>About the company</b> </h3></span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus itaque at, blanditiis bendum, in varius tellus condimentum.ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa. <br/> <br/> <h4><b>🚗 Automobile | Buy & Sell Car </b></h4>
    </p>
    {/*<div className="icons">
      <a href="/"><i class="fa fa-facebook"></i></a>
      <a href="/"><i class="fa fa-twitter"></i></a>
      <a href="/"><i class="fa fa-linkedin"></i></a>
      <a href="/"><i class="fa fa-google-plus"></i></a>
      <a href="/"><i class="fa fa-instagram"></i></a>
    </div>*/}
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Street name and number</span> Asansol, India</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+91) 7908531354</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="/"> motoemporiumbusiness@company.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2><img class="footerimg" src="https://t4.ftcdn.net/jpg/03/21/18/45/360_F_321184577_RyFPSJXBxtovE4sDlwpGxMhC0roA3RmL.jpg" alt="logo"/></h2>
    <p className="menu">
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> Insta </a> | 
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> Facebook </a> | 
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer"> Twitter</a>
    </p>
    <p className="name"> Moto Emporium &copy; 2023</p>
  </div>
</footer>
    )
}

export default Footer