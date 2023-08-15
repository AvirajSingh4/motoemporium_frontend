import React, { useState } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import './sell.css'

function Sell() {

  const[name,setname]=useState("");
  const[email,setemail]=useState("")
  const[phone,setphone]=useState("");
  const[car,setcar]=useState("")
  const[reg,setreg]=useState("");
  const[km,setkm]=useState("");
  const[dat,setdat]=useState("");
  const[price,setprice]=useState("");
  const[owner,setowner]=useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`Form submitted:`);
      console.log(`NAME: ${name}`);
      console.log(`EMAIL: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Car: ${car}`);
      console.log(`Reg: ${reg}`);
      console.log(`KM: ${km}`);
      console.log(`Date: ${dat}`);
      console.log(`Price: ${price}`);
      console.log(`Fuel: ${owner}`);

      const customersellobj = {
          cname: name,
          cemail: email,
          cphone: phone,
          ccar:car,
          creg:reg,
          ckm:km,
          cdat:dat,
          cprice:price,
          cowner:owner,
      }


      axios.post('http://localhost:5000/user/sell',customersellobj)
      .then(res => {
          console.log(res.data)
          console.log('REGISTRATION SUCCESSFUL')

          //TO CLEAR DATA
          setname('')
          setemail('')
          setphone('')
          setcar('')
          setreg('')
          setkm('')
          setdat('')
          setprice('')
          setowner('')
      });
}


  return (
    <div className="main-container">
        <div className="head">
        <h1>Sell your car at best price instantly from home</h1>
        <h5>If you wish to sell your used luxury car and it if satisfies these conditions:</h5><br></br>
        </div>
     

      
      <div className="ul_li">
        <ul>
          <li>Non-accidental/Non-tampered</li>
          <li>Registered in the year 2016 & above</li>
          <li>Driven under 40,000 Kilometers</li>
          <li>National Crime Record Check</li>
          <li>Service and Insurance history check</li>
          <li>Immaculate Physical Condition</li>
        </ul>
      </div>
      <div className="gyaan">
      
      </div>

            <form className="fo" onSubmit={(handleSubmit)}
            >

                Name*
                <input type="text" name="name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                placeholder="Enter Your Name" required/><br></br>

                Email*
                <input type="email" name="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Enter Your Email" required/><br></br>
 
                Phone*
                <input type="text" name="phone" maxlength="10"
                value={phone}
                onChange={(e)=>setphone(e.target.value)} 
                placeholder="Enter Your Phone Number"   pattern="[0-9]{10}" maxLength="10" required/><br/><br/>
                
                Car Varient*
                <input type="text" name="car" 
                value={car}
                onChange={(e)=>setcar(e.target.value)}
                placeholder="BMW 7 Series" required/><br></br>

                Registration No.*
                <input type="text" name="reg" 
                value={reg} 
                onChange={(e)=>setreg(e.target.value)}
                placeholder="WB-37E-2945"  pattern="[A-Z]{2}[\\ -]{0, 1}[0-9]{2}[\\ -]{0, 1}[A-Z]{1, 2}[\\ -]{0, 1}[0-9]{4}$"   required/><br></br>

                Kms Driven*
                <select name="km"
                 value={km}
                 onChange={(e)=>setkm(e.target.value)}>
                    <option km="1000000">less than 10,000</option>
                    <option km="5000000">10,000-30,000</option>
                    <option km="10000000">30,000-60,000</option>
                    <option km="30000000">mode than 60,000</option>
                </select><br></br>
                
                Registration date*
                <input type="text" name="dat" 
                value={dat}
                onChange={(e)=>setdat(e.target.value)}
                placeholder="20/04/2016" required/><br></br>

                Expected Price*
                <input type="number" name="price" 
                value={price}
                onChange={(e)=>setprice(e.target.value)}
                placeholder="2000000" required/><br></br>

                No. of owner*
                <select name="owner"
                value={owner}
                onChange={(e)=>setowner(e.target.value)}>
                    <option owner="1st">1st</option>
                    <option owner="2nd">2nd</option>
                    <option owner="3rd">3rd</option>
                    <option owner="more than 3">more than 3</option>
                </select><br/><br/>


    <button type="submit" className="btn btn-danger" name="Submit">Submit</button>
            </form>


     <br></br>
      <h1>Easiest Way to Sell Your Car</h1>
      <h6>Experience the smoothest, quickest and safest selling and transfer process of your luxury vehicles with Car Street. We have an inventory turnover unmatched by any other organisations in the business. To keep fueling that great outflow of exotic vehicles, we need a good level of inflow, for that we need your support so we can bring the gems of the pre-owned luxury car market to our showroom for you.</h6>



    </div>
  )
}
export default Sell;