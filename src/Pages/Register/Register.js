import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Register.css'
const Register = () => {
    const { handleOnSubmit, handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <form onSubmit={handleOnSubmit} className="reg-form mt-4" >
            <h2 className="text-center">Please Fill Up the Form</h2>
            <div className="row mb-4">
                <div className="col">
                    <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" required />
                        <label className="form-label" for="form3Example1">First name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" required />
                        <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                </div>
            </div>

            {/* Email input */}
            <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" onChange={handleEmailChange} required />
                <label className="form-label" for="form3Example3">Email address</label>
            </div>

            {/* Password input */}
            <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" onChange={handlePasswordChange} required />
                <label className="form-label" for="form3Example4">Password</label>
            </div>
            {/* Submit button  */}
            <div>
                <Link to="/submit">
                    <button type="submit" className="btn btn-primary btn-block ">Register</button>
                </Link>
                <p className="text-center">Already Have an account?</p>
                <Link to="/login">
                    <p className="text-center mb-5 ">Please click here to log in</p>
                </Link>
            </div>
        </form >
    );
};

export default Register;