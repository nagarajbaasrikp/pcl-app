import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';

import myImg9 from './images/IMG-20241109-WA0000.jpg';

import './App.css'

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(sessionStorage.getItem('token')) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userId');
            navigate('/')
        }
            navigate('/login');
    }

    return (
        <div className='header-wrapper'>
        <header className="App-header">
            <section className='App-header-item'>
                <Link to={'/'}>
                    <img className='header-logo' src={myImg9} alt="Err" />
                </Link>           
            </section>
            <span className='App-header-item'>
                <p onClick={handleClick} className='App-header-button'><AccountCircleIcon style={{color: '#165d59'}} /> { sessionStorage.getItem('token') ? 'Logout' : 'Login' }</p>
            </span>
        </header>
        <header className='App-header'>
            <ul className='Lower-app-bar'>
                <li className='Lower-app-bar-item'><Link className='link' to='/about-us'>About Us</Link></li>
                <li className='Lower-app-bar-item'><Link className='link' to='/medicines'>About Medicines</Link></li>
                <li className='Lower-app-bar-item'><Link className='link' to='/doctors'>Find Doctors</Link></li>
                <li className='Lower-app-bar-item'><Link className='link' to='/labs'>Laboratory</Link></li>
                <li className='Lower-app-bar-item'><Link className='link' to='/hospitals'>Hospitals</Link></li>
                <li className='Lower-app-bar-item'><Link className='link' to='/pharmacies'>Pharmacies</Link></li>
                <li className='Lower-app-bar-item'><Link className='link' to='/services'>Services</Link></li>
            </ul>
        </header>
    </div>
    );
};

export default Header