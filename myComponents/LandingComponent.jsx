import React from 'react';
import '../css/css/index_page_css.css';
import { NavLink } from 'react-router-dom';
import hospital_logo from '../images/hospital_logo.png';

const LandingComponent = () => {
    return (
        <>
            <div className="top-header">
                <div> <img src={hospital_logo} alt="logo" /> </div>
                <div> <h1> Hospital Managment System </h1> </div>
            </div>
            <div className="navigation-bar">

                <div> <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/patient-portal"> Patient Portal </NavLink> </div>
                <div> <NavLink style={{ color: 'black', textDecoration: 'none' }} to=""> OPD Scheduling </NavLink> </div>
                <div> <NavLink style={{ color: 'black', textDecoration: 'none' }} to=""> Check Availability </NavLink> </div>
                <div> <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/our-specialists"> Our Specialists </NavLink> </div>
                <div> <NavLink style={{ color: 'black', textDecoration: 'none' }} to=""> Contact Us </NavLink> </div>
                <div> <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/feedback"> Feedback / Query </NavLink> </div>

            </div>

            <div></div>
        </>
    );
}

export default LandingComponent;