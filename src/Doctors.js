import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './App.css'

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/doctors').then(res => {
            setDoctors(res.data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Doctors</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Hospital Name</th>
                        <th>Hospital Address</th>
                        <th>Google Maps Link</th>
                        <th>Years of Experience</th>
                        <th>Graduated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor, index) => 
                            (
                                <tr key={index}>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.hospital.name}</td>
                                    <td>{doctor.hospital.address}</td>
                                    <td><a target=" " href={doctor.hospital.google_maps_link}>{doctor.hospital.google_maps_link}</a></td>
                                    <td>{doctor.experience}</td>
                                    <td>{doctor.graduated ? 'Yes' : 'No' }</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Doctors