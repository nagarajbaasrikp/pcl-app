import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";

const Account = () => {

    const params = useParams();
    let  [userOb, setUserOb] = useState({});

    useEffect(() => {
        //console.log(params);
        axios.get(`http://localhost:3001/users/${params.id}`).then(res => {
            console.log(res.data);
            setUserOb(res.data);
        }).catch(err => console.log(err));
    }, [])

    return (
        <>
            <h1>Account Information</h1>
            <p>Name: {userOb.name}</p>
            <p>Email: {userOb.email}</p>
            <p>Age: {userOb.age}</p>
            <p>DOB: {userOb.dob}</p>
        </>
    )
}

export default Account