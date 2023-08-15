import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import './car.css'

function Home(){
    return(
        <div>
             {/*<h2>Home</h2>*/}
    <Carousel>
      <Carousel.Item>
        <li><img
          className="d-block w-100"
          src="https://carstreetindia.com/blogs/wp-content/uploads/2022/06/5-scaled.jpg"
          alt="First slide"
        /></li>
        <Carousel.Caption>
          <h1>Buy And Sell Pre Own Cars</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora harum veniam totam. Ab officia minus iusto unde corrupti quos cum sint neque, pariatur nam, repellat rerum eveniet obcaecati corporis eum?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <li><img
          className="d-block w-100"
          src="https://carstreetindia.com/blogs/wp-content/uploads/2022/06/26-1170x780.jpg"
          alt="Second slide"
        /></li>

        <Carousel.Caption>
          <h1>Service Cars</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae esse nisi reiciendis aut exercitationem ratione totam aperiam consectetur delectus voluptatibus?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <li><img
          className="d-block w-100"
          src="https://carstreetindia.com/blogs/wp-content/uploads/2022/06/23-1170x780.jpg"
          alt="Third slide"
        /></li>

        <Carousel.Caption>
          <h1>Explore More About Cars</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, repellat alias aliquam id modi quasi.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>    
<br/><br/>

    <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <div className="iconssbox wow fadeIn animated" data-wow-delay=".0s" >
                     <a href="/userreg">
                        <div className="circle_icon_box">
                           <img src="https://www.autobest.co.in/uploads/cms/036958415151.png" alt="Custom Requirement"/>
                        </div>
                        <div className="iconb_text">
                           <h4>Custom Requirement</h4>
                           <p>Prerequisite of car not available currently. Will get back shortly.</p>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="iconssbox wow fadeIn animated" data-wow-delay=".30s">
                     <a href="/carservicing">
                        <div className="circle_icon_box">
                           <img src="https://www.autobest.co.in/uploads/cms/314196553587.png" alt="EMI Calculator"/>
                        </div>
                        <div className="iconb_text">
                           <h4>Car SERVICING</h4>
                           <p>

                           </p>
                        </div>
                     </a>
                  </div>
               </div>
              
               <div className="col-md-3">
                  <div className="iconssbox wow fadeIn animated" data-wow-delay=".90s">
                     <a href="/buycar">
                        <div className="circle_icon_box">
                           <img src="https://www.autobest.co.in/uploads/cms/831550693161.png" alt="Get Auto Loan"/>
                        </div>
                        <div className="iconb_text">
                           <h4>Buy Car</h4>
                           <p></p>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      <br/>
         <div id="cbg"><Carousel variant="dark" fade>
      <Carousel.Item>
        <img
          className="dblock w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0NO94kP9Rlt58LGAn3SycWpeLi1lWg95CBZ4kxbgvZ5ac6E5FZx63G51v6ZvU5sYB9g&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut quo, numquam dolorem provident ipsam distinctio consectetur vitae doloribus quasi quibusdam, dolorum fuga dolores</h4>
          <h3><b>WILLIAM</b></h3><b>Buyer</b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="dblock"
          src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h4>" Lorem ipsum Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing elit. Id ut quo, numquam dolorem provident ipsam distinctio consectetur vitae doloribus quasi quibusdam, dolorum fuga dolores Lorem ipsum dolor sit amet.</h4>
          <h3><b>Orehimi</b></h3><b>Buyer</b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="dblock w-20"
          src="https://lovetobeinthekitchen.com/wp-content/uploads/2015/04/Emily-Circle-Profile-e1428003256512.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h4>" Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem aliquid accusamus suscipit eveniet voluptatem facere soluta esse, rem ut Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam.</h4>
          <h3><b>Jennifer</b></h3><b>Buyer</b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="dblock w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQUfzh7wURAjggSMuAu7SZU6noGFOsX9DWg&usqp=CAU"
          alt="Fouth slide"
        />

        <Carousel.Caption>
        <h4>" Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui exercitationem amet consectetur debitis! Quis, deserunt!</h4>
          <h3><b>ASHWIN</b></h3><b>Buyer</b>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

</div>
    )   
}

export default Home