//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminviewall1() {
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalluser1')
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
                    <td>{currentrow.cbudget}</td>
                    <td>{currentrow.cfuel}</td>
                    <td>{currentrow.cmessage}</td>
                    <td>
                        <button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });
    }
    function removeRow(index) {
        var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
        let removerow = tempemplist.splice(index, 1);
        console.log(removerow[0].empemail)

        axios.delete('http://localhost:5000/admin/deluser1/' + removerow[0].cemail)
            .then(res => {
                console.log(res.data)
                console.log('SUCCESSFULLY DELETED')
                setEmpList(tempemplist)
            })
            .catch(err => {
                console.log(err)
                console.log('PROBLEM....')
            })
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
                        <th>Car</th>
                        <th>Budget</th>
                        <th>Fuel</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>
                    {viewEmpList()}
                </tbody>
            </table>
        </div>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default Adminviewall1