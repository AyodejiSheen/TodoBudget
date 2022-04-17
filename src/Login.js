import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export const Login = (props) => {

    let {phone, logName, info, handlePhoneChange, handleLogSubmit, handleChangename, set} = props;



    return (
        <>

            <div className='shadow bg-white p-4' style={{width:"200px"}}>
                <p>phone:"08101560887"</p>
                <p>username: "Ayodeji"</p>
            </div>
    
            <form className="form-group mx-auto text-center shadow p-5" onSubmit={handleLogSubmit} style={{width:"300px" , marginTop:"100px"}}>
            <p className="text-center text-primary">{info}</p>
                    <input type="number" name="phone" value={phone} onChange={handlePhoneChange} placeholder="Phone Number" className="form-control mb-4"></input>
                    <input type="text" name="username" value={logName} onChange={handleChangename} placeholder="username" className="form-control mb-4"></input>
                <div className="text-center">
                <button className="btn btn-primary">Sign up</button>
                </div>
                
            </form>
        </>
    )
}

