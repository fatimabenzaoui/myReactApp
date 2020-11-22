import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ApiApodNasa from "../components/stellarApp/ApiApodNasa";

const StellarApp = () => {
    return ( 
        <div>
            <NavBar />
            <ApiApodNasa />
            <Footer />
        </div>
     );
}
 
export default StellarApp;