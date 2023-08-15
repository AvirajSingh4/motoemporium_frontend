import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import CardGroup from 'react-bootstrap/CardGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



import React from 'react'
import './buycar.css'

function Buycar() {
  return (
    
    <>
    
    <div class="head">
      <h1 className='head'>WELCOME TO OUR STOCK</h1> </div>
    
    <CardGroup>
      <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={273}
        alt="1280x853"
        src="https://www.autobest.co.in/uploads/car/toyota-fortuner-4-4-a-t-915086067902.jpeg"/>
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>Toyota Forturner <br /> PRICE 3775000 <br />
        Model 2019</pre>
        <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="fortuner">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>    
  </Card>

  <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={273}
        alt="171x180"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgU3fQLo7vzhagKPfxARzDLxCR02IfePT7ZcXudjaBYm3qaM4qY1U3-MbVWprJwHvSfA4&usqp=CAU"/>
        
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>KIA CARNIVAL LIM<br /> PRICE 3275000 <br />
        Model 2020</pre>
        <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/book">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>
  </Card>
   

  <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={273}
        alt="171x180"
        src="https://www.autobest.co.in/uploads/car/mahindra-thar-lx-4x4-at-soft-top-671576561602.jpeg"/>
        
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>MAHINDRA THAR<br /> PRICE 157500 <br />
        Model 2021</pre>
      <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/book">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>
    
    
  </Card>
  

  <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={273}
        alt="171x180"
        src="https://www.autobest.co.in/uploads/car/mercedes-benz-c-class-c220d-progressive-1-178766167691.jpeg"/>
        
      <Figure.Caption>
        <pre style={{ fontSize: 20 }}>MERCEDES C-CLASS <br />C220 D<br />PRICE 367500
        </pre>
        <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/book">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>
    </Card>

 </CardGroup>   
 <br />


 {/* //2 */}
 <CardGroup>
 <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={273}
        alt="171x180"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXY3ZrPW4nTq_IkrDT2G2BkK8agznA6p_aA&usqp=CAU"/>
        
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>BMW 330 LI <br />PRICE 3275000 <br />
        Model 2022</pre>
      <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/book">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>
    </Card>   

    <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={273}
        alt="171x180"
        src="data:image/jpeg;base64,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"/>
        
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>MERCEDES-BENS GLC200 <br />PRICE 6275000 <br />
        Model 2022</pre>
      <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/book">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>
    </Card>

    <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={273}
        alt="171x180"
        src="https://imgd.aeplcdn.com/0x0/cw/ec/28085/Land-Rover-Range-Rover-Velar-Right-Front-Three-Quarter-92180.jpg?v=201711021421"/>
        
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>RANGE ROVER VELAR <br />PRICE 9775000 <br />
        Model 2022</pre>
      <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/book">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>
    </Card>

    <Card style={{ marginTop: '10cm' }}>
    <Figure>
      
    <Figure.Image
        width={348}
        height={270}
        alt="171x180"
        src="https://www.autobest.co.in/uploads/car/ford-endeavour-titanium-at-163819626129.jpeg"/>
        
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>FORD ENDEAVOUR <br /> TITANIUM <br />PRICE 11775000<br />
        Model 2018</pre>
        
        <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/book">TAKE A CLOSE LOOK</Button>
      </ButtonGroup>
      </Figure.Caption>
    </Figure>
    </Card>
  </CardGroup> 
  

 </> 
  );
}


export default Buycar