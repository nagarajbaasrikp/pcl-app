import DiscountIcon from '@mui/icons-material/Discount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LocationOnOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css'

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(sessionStorage.getItem('token')) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userId');
            navigate('/')
        }
        else {
            navigate('/login');
        }
    }

    return (
        <div className='header-wrapper'>
        <header className="App-header">
            <section className='App-header-item'>
                <Link to={'/'}>
                    <img className='header-logo' src="../IMG-20241109-WA0000.jpg" alt="Err" />
                </Link>
                <div style={{display: 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                    <span>
                        <LocationOnOutlined />
                    </span>
                    <span>
                        <p style={{margin: '2px 0px', fontSize: 'small', textAlign: 'left', color: '#777'}}>Delivery Address</p>
                        <h6 style={{margin: '0px', fontSize: 'smaller', textAlign: 'left'}}>Select Address:</h6>
                    </span>
                </div>             
            </section>
            <span className='App-header-item'>
                <p><DiscountIcon className='icons' /></p>
                <p><ShoppingCartIcon className='icons' /></p>
                <p onClick={handleClick} className='App-header-button'><AccountCircleIcon style={{color: '#165d59'}} /> { sessionStorage.getItem('token') ? 'Logout' : 'Login' }</p>
            </span>
        </header>
        <header className='App-header'>
            <ul className='Lower-app-bar'>
                <li className='Lower-app-bar-item'>About Medicines</li>
                <li className='Lower-app-bar-item'>Find Doctors</li>
                <li className='Lower-app-bar-item'>Laboratory</li>
                <li className='Lower-app-bar-item'>Hospitals</li>
                <li className='Lower-app-bar-item'>Pharmacies</li>
            </ul>
        </header>
    </div>
    );
};

export default Header