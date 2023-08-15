import React, { useState, useEffect } from "react";
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminviewall3() {
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalluser3')
            .then(response => {
                console.log(response.data)
                setEmpList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewEmpList() {
        return emplist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.cname}</td>
                    <td>{currentrow.cemail}</td>
                    <td>{currentrow.cphone}</td>
                    <td>{currentrow.ccar}</td>
                    <td>{currentrow.creg}</td>
                    <td>{currentrow.ckm}</td>
                    <td>{currentrow.cdat}</td>
                    <td>{currentrow.cprice}</td>
                    <td>{currentrow.cowner}</td>

                    <td>
                        
                    </td>
                </tr>
            );
        });
    }
    return (
        <div align="center">
           

            <h3 className="head">ALL CUSTOMER REQUIRMENT</h3><hr/>

            <table  className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Carvarient</th>
                        <th>Regno</th>
                        <th>kms</th>
                        <th>regdate</th>
                        <th>Price</th>
                        <th>Owner</th>
                    </tr>
                </thead>

                <tbody>
                    {viewEmpList()}
                </tbody>
            </table>
        </div>)
}
export default Adminviewall3;