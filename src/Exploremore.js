import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import CardGroup from 'react-bootstrap/CardGroup';


import React from "react";
import "./explore.css"

function Exploremore(){
    return(
        <div>

        
             <h1 style={{ fontSize: 50 }} >ALL BRANDS
      </h1>
      <CardGroup>
      <Card style={{ marginTop: '10cm' }}>
      <Figure>
      <Figure.Image
        
        
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=75"/>
        </Figure>  
      </Card>
      <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
        
        
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=75"/>
        </Figure>    
    
    </Card>
    <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
        
        
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=75"/>
        </Figure> 
        </Card>  
        
        <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
        
    
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=75"/>
        </Figure>  
        </Card>  
        </CardGroup>
        <CardGroup>
        <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
       
        
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=75"/>
        </Figure> 
        </Card>   
        <Card style={{ marginTop: '10cm' }}>
        
      
    <Figure>
      <Figure.Image
      
        
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=75"/>
        </Figure>    

        </Card>
        
        <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
     
        
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=75"/>
        </Figure>    
        </Card>
        <Card style={{ marginTop: '10cm' }}>
        <Figure>
      <Figure.Image
      
       
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=75"/>
        </Figure>    
        </Card>
        

      </CardGroup>
      </div>
    )
}
       export default Exploremore;