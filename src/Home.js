import React from 'react';
import {Link} from 'react-router-dom';


export const Home = () => {

  

    return(
        <>
        <div className="bg-light p-5">
        <p className="display-4 text-center"> Market Todo</p>
        <Link to="/create" className="btn btn-primary btn-block m-auto"> Create </Link> <br></br>
        <Link to="/viewitem" className="btn btn-secondary btn-block m-auto"> View </Link>
        </div>
        </>
    );
}