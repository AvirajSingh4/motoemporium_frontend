import React, { useState, useEffect } from "react";
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminviewall2() {
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalluser2')
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
                    <td>{currentrow.sername}</td>
                    <td>{currentrow.serservice}</td>
                    <td>{currentrow.seremail}</td>
                    <td>{currentrow.sermobile}</td>
                    <td>{currentrow.sermake}</td>
                    <td>{currentrow.serdate}</td>
                    <td>{currentrow.sertime}</td>
                    <td>{currentrow.sergender}</td>
                    <td>{currentrow.seraddress}</td>
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

        axios.delete('http://localhost:5000/admin/deluser2/' + removerow[0].seremail)
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
                       

            <h3 className="head">ALL SERVICING DETAILS</h3><hr/>

            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Name&emsp;&emsp;</th>
                        <th>Service&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
                        <th>Email&emsp;&emsp;&emsp;</th>
                        <th>Mobile&emsp;&emsp;&emsp;&emsp;</th>
                        <th>Car&emsp;&emsp;</th>
                        <th>Date&emsp;</th>
                        <th>Time&emsp;</th>
                        <th>Gender</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {viewEmpList()}
                </tbody>
            </table>
            
        </div>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default Adminviewall2