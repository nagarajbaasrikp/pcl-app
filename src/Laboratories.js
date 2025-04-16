import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const Laboratory = () => {

    const [laboratories, setLaboratories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/laboratories').then(res => {
            setLaboratories(res.data);
        }).catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Laboratories</h2>
        <table>
            <thead>
                <th>Name</th>
                <th>Address</th>
                <th>Services</th>
                <th>Timings</th>
                <th>Contact</th>
            </thead>
            <tbody>
                {
                    laboratories.map((laboratory, index) => (
                        <tr key={index}>
                            <td>{laboratory.name}</td>
                            <td>{`${laboratory.address.street}, ${laboratory.address.city}, ${laboratory.address.state}, ${laboratory.address.pincode}`}</td>
                            <td>{
                                laboratory.services.map((service, index) => <div key={index}>{`${service}`.charAt(0).toUpperCase().concat(service.slice(1))}</div>) 
                            }</td>
                            <td>{laboratory.timings}</td>
                            <td>{laboratory.contact}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
};

export default Laboratory