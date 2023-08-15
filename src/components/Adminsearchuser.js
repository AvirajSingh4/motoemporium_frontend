import React, { useState } from 'react'

import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminsearchuser() {

    const [bdob, setBuyDOB] = useState("");
    const [msg, setMessage] = useState("");
    const [emplist, setEmpList] = useState([]);
    const [status, setStatus] = useState(false);

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
                </tr>
            );
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:5000/admin/searchuser/' + bdob)
            .then(res => {
                console.log(res.data)
                setEmpList(res.data)
                setStatus(true)
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID BOOKING DATE')
                setStatus(false)
            })

        setBuyDOB('')
    }

    if (status === false) {
        return (
            <>
                
                <h3 className="head" style={{ color: 'brown' }}>ENTER DATE FOR SEARCH BOOKING</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="date" value={bdob}
                        onChange={(e) => setBuyDOB(e.target.value)}
                        placeholder=""
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH BOOKING" className="btn btn-success" />
                </form>
            </>)
    }
    else {
        return (
            <>
                <h3 className='head' style={{ color: 'brown' }}>ENTER DATE FOR SEARCH</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="date" value={bdob}
                        onChange={(e) => setBuyDOB(e.target.value)}
                        placeholder=""
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH BOOKING" className="btn btn-success" />
                </form>
                <br />
                <div>
                <hr />
                    <h3 style={{ color: 'blue' }}>ALL BOOKING DETAILS</h3>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                                <th>TIME</th>
                                <th>Gender</th>
                                <th>Car</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {viewEmpList()}
                        </tbody>
                    </table>
                </div>
            </>)
    }

}


//STEP 3 -- EXPORT IT TO USE IT
export default Adminsearchuser