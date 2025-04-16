import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const doLogin = e => {
        e.preventDefault();
        axios.post('http://localhost:3001/users/login', {
                        email: e.target.email.value,
password: e.target.password.value
        }).then(res => {
            console.log(res.data.token)
            console.log(res.data.id)
            sessionStorage.setItem('token', JSON.stringify(res.data.token));
            sessionStorage.setItem('userId', JSON.stringify(res.data.id));
            navigate(`/user-account/${JSON.parse(sessionStorage.getItem('userId'))}`);
        }).catch(err => {
            console.log(err);
            alert(err.response.data.msg);
        });
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={doLogin}>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter email' />
                <label htmlFor='password'>Password</label>
                <input name='password' type='password' placeholder='Enter password' /> 
                <button>Login</button>
            </form>
            <button onClick={() => navigate('/create-user')}>Create User</button>
        </div>
    )
}

export default Login