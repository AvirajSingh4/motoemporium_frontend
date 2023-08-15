//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './admin.css'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminafterlogin() {
    let usertype = sessionStorage.getItem('utype')
    //let usertype = localStorage.getItem('utype')

    if (usertype == null) {
        return (<Navigate to="/adminlogin" />)
    }
    else {
        return (
            <div>
                
                <h3 className="head">WELCOME ADMIN</h3><hr/>
                <Link to="/viewalluser" className="adminmenu">Customer Buy Booking Details</Link><hr/>
                <Link to="/viewalluser1"  className="adminmenu">Customer requirment Details</Link><hr/>
                <Link to="/viewalluser2"  className="adminmenu">Car Servicing Booking Details</Link><hr/>
                <Link to="/viewalluser3"  className="adminmenu">Sell Car Details </Link><hr/>

                <Link to="/searchuser"  className="adminmenu">Buy Car Booking Search As Per Date</Link><hr/>
        
                <Link to="/"  className="adminmenu">Admin Logout</Link><hr/>

            </div>
        )
    }


}

//STEP 3 -- EXPORT IT TO USE IT
export default Adminafterlogin