import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Hospitals = () => {

    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/hospitals').then(res => {
            //console.log(res.data);
            setHospitals(res.data);
        })
    }, [])

    return (
        <div>
            <h1>Hospitals</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Services</th>
                    <th>Open</th>
                    <th>Website</th>
                </thead>
                <tbody>
                    {
                        hospitals.map((hospital, index) => (
                            <tr key={index}>
                                <td>{hospital.name}</td>
                                <td>{hospital.type}</td>
                                <td>{`${hospital.address.street}, ${hospital.address.city}, ${hospital.address.state}, ${hospital.address.pincode}`}</td>
                                <td>
                                    {
                                        hospital.services.map((service, index) => <div key={index}>{`${service}`.charAt(0).toUpperCase().concat(service.slice(1))}</div>)
                                    }
                                </td>
                                <td>{hospital.open ? 'Closed' : 'Open'}</td>
                                <td><a href={hospital.website} target=" ">{hospital.website}</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Hospitals