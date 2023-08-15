import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Mercedes()
{
    
        return (
            
            
            <div>
              
              <h1 style={{ fontSize: 70 }} className="head">MERCEDES
              </h1>
        
              <Carousel>
      <Carousel.Item>
        <li>
        <div className="slide-container"></div>
          <img
        
          className="d-block w-100"
          src="https://images.pexels.com/photos/12870055/pexels-photo-12870055.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
          style={{ objectFit: 'cover', width: '80%', height: '700px' }}
        /></li>
        <Carousel.Caption>
          <h1>Mercedes-Benz EQE</h1>
          <p>The Mercedes-Benz EQE prices are expected to range between Rs. 70.00 Lakh - Rs. 90.00 Lakh, depending on the variant selected.
The EQE saloon is likely to be launched in the country, later in 2022 or at the beginning of 2023.</p>
        
        </Carousel.Caption>
        <br></br>
        <div className="image-tag">
        
        <button type="button" className="btn btn-warning" style={{ padding: "10px 20px", border: "2px solid #ffc107", borderRadius: "5px" }}><b>UPCOMING</b></button>
</div>
<div className="image-tag" style={{ border: "5px", backgroundColor: "yellow" }}></div>
      </Carousel.Item>
      <Carousel.Item>

        <li><img
          className="d-block w-100"
          src="https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
          style={{ objectFit: 'cover', width: '80%', height: '700px' }}
        /></li>

        <Carousel.Caption>
          <h1>Mercedes-Benz AMG EQS</h1>
          <p>Mercedes-Benz AMG EQS price is Rs. 2.45 Crore.

Variants  
The vehicle is available in a single AMG-spec 53 4MATIC+ variant. 
The electric performance sedan is powered by two permanently agitated synchronous motors, which are powered by a 107.8 kWh battery pack. </p>
          
        </Carousel.Caption>
        <div className="image-tag">
        
        <button type="button" className="btn btn-warning" style={{ padding: "10px 20px", border: "2px solid #ffc107", borderRadius: "5px" }}><b>UPCOMING</b></button>
</div>
<div className="image-tag" style={{ border: "5px", backgroundColor: "yellow" }}></div>
      </Carousel.Item>
      <Carousel.Item>
        <li><img
          className="d-block w-100"
          src="https://images.pexels.com/photos/756789/pexels-photo-756789.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
          style={{ objectFit: 'cover', width: '80%', height: '700px' }}
        /></li>

        <Carousel.Caption>
          <h1>Mercedes-Benz AMG GT 63 S 4MATIC Plus</h1>
          <p>Mercedes-Benz AMG GT 63 S 4MATIC Plus price is Rs. 2.70 Crore.
The AMG GT 63S 4matic+ Coupé is the fastest four-door luxury sports car in the world according to its lap timing around the Nürburgring Nordschleife,
where it was even faster than the AMG GT R. </p>
          
        
        </Carousel.Caption>
        <div className="image-tag">
        
        <button type="button" className="btn btn-warning" style={{ padding: "10px 20px", border: "2px solid #ffc107", borderRadius: "5px" }}><b>UPCOMING</b></button>
</div>
<div className="image-tag" style={{ border: "5px", backgroundColor: "yellow" }}></div>
      </Carousel.Item>
    </Carousel>    
             
      <CardGroup >
      
      <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
       width={1000}
       height={1000}
       alt="1300x853"
         style={{opacity: 1}}
        
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/36129/g-class-exterior-right-front-three-quarter.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>Mercedes-Benz G-Class<br />
      ₹ 1.72 Crore</pre>
</Figure.Caption>
        </Figure>    
    
    </Card>
    <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
       width={1000}
       height={1000}
       alt="1300x853"
        
        style={{opacity: 1}}
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/116201/new-c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>Mercedes-Benz C-Class<br />
      ₹ 57.20 Lakh</pre>
</Figure.Caption>
        </Figure> 
        </Card>  
        </CardGroup>
        <CardGroup>
        
        <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
       width={1000}
       height={1000}
       alt="1300x853"
        
        style={{opacity: 1}}
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/44784/gla-exterior-right-front-three-quarter.jpeg?q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>Mercedes-Benz GLA<br />
      ₹ 46.48 Lakh</pre>
</Figure.Caption>
        </Figure>  
        </Card>  
      
        <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
       width={1000}
       height={1000}
       alt="1300x853"
       
       style={{opacity: 1}}
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/115149/maybach-s-class-exterior-right-front-three-quarter.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>Mercedes-Benz Maybach S-Class<br />
      ₹ 2.57 Crore</pre>
</Figure.Caption>
        </Figure> 
        </Card>  
        </CardGroup>
        <CardGroup>
                <Card style={{ marginTop: '10cm' }}>
        
      
    <Figure>
      <Figure.Image
       width={1000}
       height={1000}
       alt="1300x853"
      
      style={{opacity: 1}}
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45207/a-class-limousine-exterior-right-front-three-quarter-67.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>Mercedes-Benz A-Class Limousine<br />
      ₹ 41.99 Lakh</pre>
</Figure.Caption>
        </Figure>    

        </Card>
        
       
        <Card style={{ marginTop: '10cm' }}>
        <Figure>
      <Figure.Image
       width={1000}
       height={1000}
       alt="1300x853"
      
      style={{opacity: 1}}
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/e-class-exterior-right-front-three-quarter.jpeg?q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>Mercedes-Benz E-Class<br />
      ₹ 72.48 Lakh</pre>
</Figure.Caption>
        </Figure>    
        </Card>
        

      </CardGroup>
      
          </div>
    )
}
       export default Mercedes;