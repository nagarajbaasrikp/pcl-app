import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './App.css'

const Pharmacies = () => {

    const [pharmacies, setPharmacies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/pharmacies').then(res => {
            setPharmacies(res.data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Pharmacies</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Services</th>
                        <th>Owner</th>
                        <th>Established</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pharmacies.map((pharmacy, index) => 
                            (
                                <tr key={index}>
                                    <td>{pharmacy.name}</td>
                                    <td>{pharmacy.type}</td>
                                    <td>{`${pharmacy.address.street}, ${pharmacy.address.city}, ${pharmacy.address.state}, ${pharmacy.address.pincode}`}</td>
                                    <td>{pharmacy.services.map((service, index) => <div key={index}>{`${service}`.charAt(0).toUpperCase().concat(service.slice(1))}</div>)}</td>
                                    <td>{pharmacy.owner}</td>
                                    <td>{pharmacy.established}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Pharmacies