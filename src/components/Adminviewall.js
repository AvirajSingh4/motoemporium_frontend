//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminviewall() {
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalluser')
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
                    <td>{currentrow.buyname}</td>
                    <td>{currentrow.buyemail}</td>
                    <td>{currentrow.buymobile}</td>
                    <td>{currentrow.buydob}</td>
                    <td>{currentrow.buypass}</td>
                    <td>{currentrow.buygender}</td>
                    <td>{currentrow.buycar}</td>
                    <td>{currentrow.buyaddress}</td>
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

        axios.delete('http://localhost:5000/admin/deluser/' + removerow[0].buyemail)
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
                       

            <h3 className="head">ALL BOOKING DETAILS</h3><hr/>

            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Name&emsp;&emsp;</th>
                        <th>Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
                        <th>Mobile&emsp;&emsp;&emsp;</th>
                        <th>DATE OF APPOINMENT&emsp;&emsp;&emsp;&emsp;</th>
                        <th>TIME&emsp;&emsp;</th>
                        <th>Gender&emsp;</th>
                        <th>CAR MODEL&emsp;</th>
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
export default Adminviewall