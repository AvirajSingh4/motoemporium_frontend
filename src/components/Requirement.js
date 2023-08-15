import React, { useState } from "react";
//import {useNavigate} from "react-router-dom";
import axios from "axios"
import './requirement.css'

function Requirement(){
        const[name,setname]=useState("");
        const[email,setemail]=useState("")
        const[phone,setphone]=useState("");
        const[car,setcar]=useState("")
        const[budget,setbudget]=useState("");
        const[fuel,setfuel]=useState("");
        const[message,setmessage]=useState("");

        const handleSubmit = (evt) => {
            evt.preventDefault();
            console.log(`Form submitted:`);
            console.log(`NAME: ${name}`);
            console.log(`EMAIL: ${email}`);
            console.log(`Budget: ${budget}`);
            console.log(`Fuel: ${fuel}`);

            const customerobj = {
                cname: name,
                cemail: email,
                cphone: phone,
                ccar:car,
                cbudget:budget,
                cfuel:fuel,
                cmessage:message    
            }


            axios.post('http://localhost:5000/user/userreg',customerobj)
            .then(res => {
                console.log(res.data)
                console.log('REGISTRATION SUCCESSFUL')

                //TO CLEAR DATA
                setname('')
                setemail('')
                setphone('')
                setcar('')
                setbudget('')
                setfuel('')
                setmessage('')
            });
    }
    
    return(
        <div className="back">
            <div className="head">
            <h1>CUSTOM REQUIREMENT</h1>
            </div><br/>
            <h3>Looking for an Astounding Car ? </h3>
            <form className="fo" onSubmit={(handleSubmit)}
            >

                Name*
                <input type="text" name="name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                placeholder="Enter Your Name" required/>

                Email*
                <input type="email" name="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Enter Your Email" required/>
 
                Phone*
                <input type="text" name="phone" maxlength="10"
                value={phone}
                onChange={(e)=>setphone(e.target.value)} 
                placeholder="Enter Your Phone Number"  pattern="[0-9]{10}" maxLength="10" required/><br/><br/>
                
                Car Required*
                <input type="text" name="car" 
                value={car}
                onChange={(e)=>setcar(e.target.value)}
                placeholder="Enter Car" required/>
                Budget*
                <select name="budget"
                 value={budget}
                 onChange={(e)=>setbudget(e.target.value)}>
                    <option budget="1000000">10 lakh</option>
                    <option budget="5000000">50 lakh</option>
                    <option budget="10000000">1 crore</option>
                    <option budget="30000000">3 crore</option>
                </select>
                Fuel Preference*
                <select name="fuel"
                value={fuel}
                onChange={(e)=>setfuel(e.target.value)}>
                    <option fuel="Petrol">Petrol</option>
                    <option fuel="Diesel">Diesel</option>
                    <option fuel="Hybrid">Hybrid</option>
                    <option fuel="Other">Other</option>
                </select><br/><br/>
                Message*
    <textarea name="message" rows="4" cols="35" 
    value={message}
    onChange={(e)=>setmessage(e.target.value)}
    placeholder="Enter Message" required/><br/><br/>

    <button type="submit" className="btn btn-danger" name="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Requirement