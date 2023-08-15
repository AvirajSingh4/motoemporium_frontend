
import React, { useState } from "react";

import axios from 'axios';


function Book() {
   const [bname, setBuyName] = useState("");
   const [bemail, setBuyEmail] = useState("");
   const [bmobile, setBuymobile] = useState("");
   const [bdob, setBuyDOB] = useState("");
   const [bpass, setBuyPass] = useState("")
   const [bgender, setBuyGender] = useState("");
   const [bcar, setBuyCar] = useState("");
   const [baddress, setBuyAddress] = useState("");
   const [msg, setMessage] = useState("");

   const handleSubmit = (evt) => {
       evt.preventDefault();
       console.log(`Form submitted:`);
       console.log(`NAME: ${bname}`);
       console.log(`EMAIL: ${bemail}`);
       console.log(`PHONE: ${bmobile}`);
       console.log(`Car: ${bcar}`);

       //CREATE JSON AND STORE ALL USER INPUT
       const buyobj = {
         buyname: bname,
         buyemail: bemail,
         buymobile: bmobile,
         buydob: bdob,
         buypass: bpass,
         buygender: bgender,
         buycar: bcar,
         buyaddress: baddress
       }

       //COMMUNICATE WITH BACKEND USING REST API
       axios.post('http://localhost:5000/user/book', buyobj)
           .then(res => {
               console.log(res.data)
               setMessage('REGISTRATION SUCCESSFUL')

               //TO CLEAR DATA
               setBuyName('')
               setBuyEmail('')
               setBuymobile('')
               setBuyDOB('')
               setBuyPass('')
               setBuyGender('')
               setBuyCar('')
               setBuyAddress('')
           });
   }

  return (
    <div>
      
    <h1 className="head">BOOK YOUR SLOT</h1>
      <h4>Fill the form and our executive will attend you shortly</h4>
      <h4 style={{ color: "brown" }}> {msg}</h4>
       <form onSubmit={handleSubmit}>
                <input type="text" value={bname}
                    onChange={(e) => setBuyName(e.target.value)} placeholder="Enter Name"
                    required />
                <br /><br />

                <input type="email" value={bemail}
                    onChange={(e) => setBuyEmail(e.target.value)} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="text" value={bmobile}
                    onChange={(e) => setBuymobile(e.target.value)} placeholder="Enter Mobile No" pattern="[0-9]{10}" maxLength="10"
                    required />
                <br /><br />

                <input type="date" value={bdob}
                    onChange={(e) => setBuyDOB(e.target.value)} />
                <br /><br />

                <input type="Time" value={bpass}
                    onChange={(e) => setBuyPass(e.target.value)} placeholder="Enter you time"
                    required />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={bgender === 'MALE'}
                    onChange={(e) => setBuyGender(e.target.value)} />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={bgender === 'FEMALE'}
                    onChange={(e) => setBuyGender(e.target.value)} />
                <label>Female</label>
                <br /><br />

                <select value={bcar} onChange={(e) => setBuyCar(e.target.value)}>
                    <option value="FORTUNER">FORTUNER</option>
                    <option value="THAR">THAR</option>
                    <option value="KIA CARNIVAL">KIA CARNIVAL</option>
                    <option value="MERCEDES C-CLASS">MERCEDES C-CLASS </option>
                    <option value="MERCEDES-BENS GLC200">MERCEDES-BENS GLC200 </option>
                    <option value="RANGE ROVER VELAR">RANGE ROVER VELAR </option>
                    <option value="FORD ENDEAVOUR TITANIUM">FORD ENDEAVOUR TITANIUM</option>
                </select>
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={baddress}
                    onChange={(e) => setBuyAddress(e.target.value)} rows="3" >
                </textarea>
                <br /><br />

                <input type="submit" className="btn btn-danger" value="REGISTER" />

            </form>   
          
  </div>
  
  );
}

export default Book;