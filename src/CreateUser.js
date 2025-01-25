import axios from "axios";
import { useNavigate } from "react-router";

const CreateUser = () => {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3001/users', {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        dob: e.target.dob.value,
        age: Number(e.target.age.value)
    }).then(res => {
        console.log(res);
        navigate('/');
    }).catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Enter Your Name" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email" />
                <label htmlFor="dob">Date of Birth</label>
                <input name="dob" type="date" />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Enter Password"/>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" placeholder="Enter Age" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser