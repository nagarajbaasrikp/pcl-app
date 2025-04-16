import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './Homepage';
import Login from './Login';
import CreateUser from './CreateUser';
import Account from './Account';
import Hospitals from './Hospitals';
import Pharmacies from './Pharmacies';
import Medicines from './Medicines';
import Doctors from './Doctors';
import Laborities from './Laboratories';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Services from './Services';
import SearchResults from './SearchResults';
import NotSearchResults from './NotSearchResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Homepage />} />
          <Route path='login' element={<Login />} />
          <Route path='create-user' element={<CreateUser />} />
          <Route path='user-account/:id' element={< Account/>} />
          <Route path='medicines' element={<Medicines />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='labs' element={<Laborities />} />
          <Route path='hospitals' element={<Hospitals />} />
          <Route path='pharmacies' element={<Pharmacies />} />
          <Route path='about-us' element={<About />} />
          <Route path='services' element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
