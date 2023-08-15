import './services.css';
import axios from 'axios';
import React, { useState } from "react";

function CarServicing() {

    const [sname, setCSname] = useState("");
    const [sservice, setCSservice] = useState("");
    const [semail, setCSemail] = useState("");
    const [smobile, setCSmobile] = useState("");
    const [smake, setCSmake] = useState("");
    const [sdate, setCSdate] = useState("");
    const [stime, setCStime] = useState("");
    const [sgender, setCSgender] = useState("");
    const [saddress, setCSaddress] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${sname}`);
        console.log(`EMAIL: ${semail}`);
    
        //CREATE JSON AND STORE ALL USER INPUT
        const serobj = {
            sername: sname,
            serservice: sservice,
            seremail: semail,
            sermobile: smobile,
            sermake: smake,
            serdate: sdate,
            sertime: stime,
            sergender: sgender,
            seraddress: saddress,
        }
    

        //COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/user/CarServicing', serobj)
            .then(res => {
                console.log(res.data)
                console.log('REGISTRATION SUCCESSFUL')

                //TO CLEAR DATA
                setCSname('')
                setCSservice('')
                setCSemail('')
                setCSmobile('')
                setCSmake('')
                setCSdate('')
                setCStime('')
                setCSgender('')
                setCSaddress('')
                });
        
    }
    return ( 
        <>
        <div className='head'>
            <h1> CAR SERVICING </h1>
            <p> House of used and new cars</p>
        </div>
        <div className='s1'>
            <div className='s2'>
            <h3>Fill the form and our executive will attend you shortly</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={sname}
                    onChange={(e) => setCSname(e.target.value)} placeholder="Enter Your Name"
                    required />
                <br /><br />

                <select value={sservice} onChange={(e) => setCSservice(e.target.value)}>
                    <option value="1">--Please select the services--</option>
                    <option value="book for insurence claim">book for insurence claim</option>
                    <option value="book car for detailing">book car for detailing</option>
                    <option value="book car for paint job">book car for paint job</option>
                    <option value="get your car fixed">get your car fixed</option>
                </select>
                <br /><br />
                <input type="email" value={semail}
                    onChange={(e) => setCSemail(e.target.value)} placeholder="Enter Your Email"
                    required />
                <br /><br />

                <input type="text" value={smobile}
                    onChange={(e) => setCSmobile(e.target.value)} placeholder="Enter Your Mobile No"  pattern="[0-9]{10}" maxLength="10"
                    required />
                <br /><br />

                <input type="text" value={smake}
                    onChange={(e) => setCSmake(e.target.value)} placeholder="Enter Car make and model"
                    required /> 
                <br /><br />

                <input type="date" value={sdate}
                    onChange={(e) => setCSdate(e.target.value)} placeholder="Enter date of servicing"
                    required />
                <br /><br />

                <input type="time" value={stime}
                    onChange={(e) => setCStime(e.target.value)} placeholder="Enter time for servicing"
                    required />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={sgender === 'MALE'}
                    onChange={(e) => setCSgender(e.target.value)} />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={sgender === 'FEMALE'}
                    onChange={(e) => setCSgender(e.target.value)} />
                <label>Female</label>
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={saddress}
                    onChange={(e) => setCSaddress(e.target.value)} rows="3" >
                </textarea>
                <br /><br />

                <input type="submit" value="REGISTER" />

            </form>
        </div>
        <div className='s3'>
        <img src='https://www.autobest.co.in/uploads/cms/515955210201.png'alt="aaa"/>
         </div>
       </div>
         {/* 3rd main div */}
       <div class="our_services">
         <div class="cont">
             <h3 style={{color:"white"}}>Our</h3>
             <h2>Car Services</h2></div>
           <div id="row">
             <div><img src='https://www.autobest.co.in/uploads/cms/101259155205.png'alt="aaaa"/></div>
             <div><img src='https://www.autobest.co.in/uploads/cms/021155200958.png'alt="aaa"/></div>
             <div><img src='https://www.autobest.co.in/uploads/cms/155521209107.png'alt="aaa"/></div>
             <div><img src='https://www.autobest.co.in/uploads/cms/259511502029.png'alt="aaa"/></div>
         </div>
         <div id='nm'>
           <p>BOOK FOR INSURANCE CLAIM</p>
           <p>BOOK CAR FOR DETAILING</p>
           <p>BOOK CAR FOR PAINT JOB</p>
           <p>GET YOUR CAR FIXED</p>
         </div>
       </div>
       </>
    );
    
 
}

export default CarServicing