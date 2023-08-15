
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import CardGroup from 'react-bootstrap/CardGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function  Fortuner() {
  return (
    <>
    
    <div>
      <div class="head">
      <h1>TOYOTA FORTUNER
      </h1>
    </div>
      
    <CardGroup>
      <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="1300x853"
        src="https://www.autobest.co.in/uploads/car/toyota-fortuner-4-4-a-t-915086067902.jpeg"/>
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>Condition : Used
Year : 2019 <br />
Engine Size : 2.8 <br />
Date of Registration : 2019 SEP <br />
Year of Manufacturing : 2019 <br />
Transmission : Automatic<br />
Assembly : CKD<br />
Warranty : No<br />

Transmission : Automatic<br />
Assembly : CKD<br />
Warranty : No<br />
</pre>
      <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="fortuner">DISCRIPTION</Button>
      
        
      </ButtonGroup>
      </Figure.Caption>
    </Figure>    
    
  </Card>

      <Card style={{ marginTop: '10cm' }}>
      
    <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="1280x853"
        src="https://encrypted-tbn0.gstatic.com/
        images?q=tbn:ANd9GcQvMJp97gyKp-M8QTgyA0QF1l-8kMUwRaa4zA&usqp=CAU"/>
      <Figure.Caption>
      <pre style={{ fontSize: 20 }}>Navigation System<br />
Reversing Camera<br />
Electronic Tailgate</pre>
      <ButtonGroup aria-label="Basic example">
      <Button variant="danger" >FEATURES</Button>
      
        
      </ButtonGroup>
      </Figure.Caption>
    </Figure>    
    
  </Card>
  </CardGroup>
  
  </div>
  <CardGroup>
      <Card style={{ marginTop: '10cm' }}>
      <Figure>
      <Figure.Image
        width={400}
        height={400}
        alt="1280x853"
        src="https://encrypted-tbn0.gstatic.com/
        images?q=tbn:ANd9GcT1m9GIDqs7ynXZ3FHsOrXuNqkq39X4TJPHwA&usqp=CAU"/>
         <figcaption>
            AUDOMETER
        </figcaption>
        </Figure>
        </Card>   
        <Card style={{ marginTop: '10cm' }}>
      <Figure>
      <Figure.Image
        width={400}
        height={400}
        alt="1280x853"
        src="https://encrypted-tbn0.gstatic.com/
        images?q=tbn:ANd9GcQjQ3mozUWLfyBjYxcJH84FsmK9CzZ4h8YGMgEsqcIavksBWg0TicH4M9KxDOraRQrWADo&usqp=CAU"/>
         <figcaption>
            INTERIOR
        </figcaption>
        </Figure>
        </Card>   

        <Card style={{ marginTop: '10cm' }}>
      <Figure>
      <Figure.Image
        width={400}
        height={400}
        alt="1280x853"
        src="https://encrypted-tbn0.gstatic.com/
        images?q=tbn:ANd9GcRdqhqWLGP0bsuQSIK50_ubesLNL96qnYSD71l90cWZQ26B0XwQ6B8r9RPtYKYVEj7JRJo&usqp=CAU"/>
        <figcaption>
            COMFORTABLE SEATS
        </figcaption>
        </Figure>
        </Card>       
    </CardGroup>
    <CardGroup>
    <Card>
  <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="http://localhost:3000/book">BOOK APPOINMENT</Button>
    </ButtonGroup>

  </Card>
  </CardGroup>
  <CardGroup>
    <Card>
  <ButtonGroup aria-label="Basic example">
      <Button variant="danger" href="/buycar">BACK TO PERIVOUS</Button>
    </ButtonGroup>
    
</Card>
</CardGroup>




 
   </>
  );
}

export default Fortuner;