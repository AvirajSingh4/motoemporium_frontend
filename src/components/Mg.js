import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function Mg()
{
    
        return (
            
            
            <div>
              
              <h1 style={{ fontSize: 70 }} className="head">MG
              </h1>
        
              <Carousel>
      <Carousel.Item>
        <li>
        <div className="slide-container"></div>
          <img
        
          className="d-block w-100"
          src="https://wallpapercave.com/dwp2x/wp10401724.jpg"
          alt="First slide"
          style={{ objectFit: 'cover', width: '100%', height: '700px' }}
        /></li>
        <Carousel.Caption>
          <h1>MG Marvel R</h1>
          <p>The MG Marvel R prices are expected to range between Rs. 26.00 Lakh - Rs. 30.00 Lakh, depending on the variant selected.
The Marvel R was unveiled on 11 January 2023, at the Auto Expo 2023 in Delhi.</p>
        
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
          src="https://wallpapercave.com/dwp2x/wp10401738.jpg"
          alt="Second slide"
          style={{ objectFit: 'cover', width: '80%', height: '700px' }}
        /></li>

        <Carousel.Caption>
          <h1>MG eRX5</h1>
          <p>The MG eRX5 prices are expected to range between Rs. 23.00 Lakh - Rs. 28.00 Lakh, depending on the variant selected.
The eRX5 was on display at the Auto Expo held in Delhi on 11 January 2023.</p>
          
        </Carousel.Caption>
        <div className="image-tag">
        
        <button type="button" className="btn btn-warning" style={{ padding: "10px 20px", border: "2px solid #ffc107", borderRadius: "5px" }}><b>UPCOMING</b></button>
</div>
<div className="image-tag" style={{ border: "5px", backgroundColor: "yellow" }}></div>
      </Carousel.Item>
      <Carousel.Item>
        <li><img
          className="d-block w-100"
          src="https://wallpapercave.com/dwp2x/wp10401754.jpg"
          alt="Third slide"
          style={{ objectFit: 'cover', width: '80%', height: '700px' }}
        /></li>

        <Carousel.Caption>
          <h1>MG 4</h1>
          <p>
          The MG 4 prices are expected to range between Rs. 15.00 Lakh - Rs. 21.00 Lakh, depending on the variant selected.
The MG 4 electric hatchback is expected to be introduced in India in 2023.
</p>
          
        
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
        
        src="https://imgd.aeplcdn.com/227x128/n/cw/ec/130583/hector-facelift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>MG Hector<br />
      ₹ 14.73 Lakh</pre>
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
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/139315/hector-plus-exterior-right-front-three-quarter.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>MG Hector Plus<br />
      ₹ 17.50 Lakh</pre>
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
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/astor-exterior-right-front-three-quarter.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>MG Astor<br />
      ₹ 10.52 Lakh</pre>
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
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/110437/zs-ev-facelift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>MG ZS EV<br />
      ₹ 23.38 Lakh</pre>
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
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/129689/gloster-exterior-exhaust-pipes-2.jpeg?isig=0&q=75"/>
         <Figure.Caption>
      <pre style={{ fontSize: 30 }}>MG Gloster<br />
      ₹ 32.60 Lakh</pre>
</Figure.Caption>
        </Figure>    

        </Card>
        
       
        

      </CardGroup>
      
          </div>
    )
}
       export default Mg;