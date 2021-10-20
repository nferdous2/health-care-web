import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInWithGoogle, handleOnSubmit, handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <form className=" form-container mt-5" onSubmit={handleOnSubmit} >
            <h2 className="text-center">Please Log in</h2>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4 p-2">
                <input type="email" id="form3Example3" className="form-control" onChange={handleEmailChange} />
                <label className="form-label" for="form3Example3">Email address</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4 p-2">
                <input type="password" id="form3Example4" className="form-control" onChange={handlePasswordChange} />
                <label className="form-label" for="form3Example4">Password</label>
            </div>

            {/* <!-- Checkbox --> */}
            <div className="form-check d-flex justify-content-center mb-4">
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example33"
                    checked
                />
                <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                </label>
            </div>

            {/* <!-- Submit button --> */}

            <Link to="/submit">
                <button type="submit" className="btn btn-primary btn-block mb-2 mx-2" >Sign up </button>
            </Link>

            {/* <!-- Register buttons --> */}
            <div className="text-center p-2">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </button>

                <button type="button" onClick={signInWithGoogle} className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </button>
            </div>
        </form >
    );
};

export default Login;