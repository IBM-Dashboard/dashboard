import React, { useEffect } from 'react';
import './Welcome.css' 
import DropzoneComponent from '../../components/DropzoneButton/DropzoneComponent';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Topbar from '../../components/Topbar/Topbar'

const Welcome = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     // Send Axios GET request to verify if the user is logged in
    //     axios.get('http://localhost:5000/auth/signin', {
    //       withCredentials: true // Enable sending and receiving cookies
    //     })
    //       .then(response => {
    //         // Handle the response from the backend
    //         if (response.status === 200) {
    //           // User is already logged in
    //           console.log('Already logged in');
    //         } else if (response.status === 401) {
    //           // User is not logged in, redirect to the login page
    //           navigate("/");
    //           console.log('Not logged in, redirecting to login');
    //         }
    //       })
    //       .catch(error => {
    //         // Handle any errors that occur during the request
    //         console.error('Error checking login status:', error);
    //       });
    //   }, []);
      
    function handleDrop(file) {
        console.log('File selected:', file);
    }

    return(
        <div className="welcome-screen">
          <Topbar></Topbar>
            <div className="background"></div>
            <div className="content">   
                <div className="logo"></div>
                <h1 className="title">Welcome to OTTERBOARD</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <DropzoneComponent onHandle={handleDrop}/>
            </div>
        </div>
    );
};

export default Welcome;