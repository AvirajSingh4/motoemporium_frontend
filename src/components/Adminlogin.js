import React from "react";
import { useNavigate } from "react-router-dom";


//STEP 1 for binding data
import { useState } from 'react';

function Adminlogin() {
    //STEP 2 CREATE VARIABLE
    const [adminid, setAdminId] = useState("");
    const [adminpass, setAdminPass] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate()

    //STEP 5
    const executeSubmit = (evt) => {
        evt.preventDefault();

        console.log(`ADMIN USER ID: ${adminid}`);
        console.log(`PASS: ${adminpass}`);

        if (adminid === 'admin' && adminpass === 'pass') {
            console.log('VALID')
            sessionStorage.setItem("utype", "ADMIN")
            //localStorage.setItem("utype", "ADMIN")
            navigate("/adminafterlogin");
        }
        else {
            setMsg('INVALID UID OR PASSWORD')
            setAdminId('')
            setAdminPass('')
        }
    }

    return (
        <div>
            
            <h3 style={{ color: 'white' }} className="head">ADMIN LOGIN</h3>
            <h4 style={{ color: 'red' }}>{msg}</h4>

            {/* STEP 4 - AFTER CLICK LOGIN BUTTON */}
            <form onSubmit={executeSubmit}>
                {/* STEP 3 ADD VALUE={} & OnCHANGE={} */}
                <input type='text' value={adminid}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="Enter USER ID" />
                <br /><br />
                <input type='password' value={adminpass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    placeholder="Enter PASSWORD" />
                <br /><br />
                <input type='submit' className="btn btn-danger" />
            </form>
        </div>
    )
}


export default Adminlogin