import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import CardGroup from 'react-bootstrap/CardGroup';
import './explore.css'
import { useNavigate} from "react-router-dom";


import React from "react";


function Exploremore(){
  const navigate = useNavigate()
    return(
      <div  className="head5">
         
 
      <div><h2 style={{color:'white'}}>Explore</h2></div>

        <div className="contain">

        
             
      <CardGroup >
      
      <Card style={{ marginTop: '8cm' }}>
      
      <Figure.Image
         style={{opacity: 1}}
         onClick={()=>navigate("/hyundai")}
          src="https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=75"/>
        
       
         
    
    </Card>
    <Card style={{ marginTop: '8cm' }}>
      
      
      <Figure.Image
        
        style={{opacity: 1}}
        onClick={()=>navigate("/tata")}
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=75"/>
       
        
        
        </Card>  
        
        <Card style={{ marginTop: '8cm' }}>
      
      <Figure.Image
        
        style={{opacity: 1}}
        onClick={()=>navigate("/mg")}
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=75"/>
       
        </Card>  
        </CardGroup>
        <CardGroup>
        <Card style={{ marginTop: '8cm' }}>
      
    
      <Figure.Image
       
       style={{opacity: 1}}
       onClick={()=>navigate("/mercedes")}
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=75"/>
        
        
        </Card>   
        <Card style={{ marginTop: '8cm' }}>
        
      
    
      <Figure.Image
      
      style={{opacity: 1}}
      onClick={()=>navigate("/bmw")}
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=75"/>
        
       
             

        </Card>
        
       
        <Card style={{ marginTop: '8cm' }}>
        
      <Figure.Image
      
      style={{opacity: 1}}
      onClick={()=>navigate("/kia")}
        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=75"/>
              
        </Card>
        

      </CardGroup>
      </div>
      </div>
    )
}
       export default Exploremore;
