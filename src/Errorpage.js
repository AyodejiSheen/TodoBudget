import React from 'react';
import {Link} from 'react-router-dom';


export const Errorpage = () => {
    return(
        <>
        <div className="text-center">
        <p className="display-4 text-center">Page Not Found</p>
        <button className="btn btn-primary"><Link to="/" className="text-white">Go to Homepage</Link></button>
        </div>
           
        </>
    );
}