import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Medicines = () => {

    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/medicines').then(res => {
            //console.log(res.data);
            setMedicines(res.data);
        })
    }, [])

    return (
        <div>
            <h2>Medicines</h2>
        <table>
            <thead>
                <th>Name</th>
                <th>Type</th>
                <th>Uses</th>
                <th>Importance</th>
                <th>Side Effects</th>
                <th>Dosage</th>
            </thead>
            <tbody>
                {
                    medicines.map((medicine, index) => (
                        <tr key={index}>
                            <td>{medicine.name}</td>
                            <td>{medicine.type}</td>
                            <td>{
                                    medicine.uses.map((use, index) => <div key={index}>{use}</div>)
                                }
                            </td>
                            <td>{medicine.importance}</td>
                            <td>{medicine.sideEffects.map((sideEffect, index) => <div key={index}>{sideEffect}<br /></div>
                            )}</td>
                            <td>{medicine.dosage}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    );
};

export default Medicines