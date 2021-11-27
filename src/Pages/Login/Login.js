import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../images/login.png'
import './Login.css'
const Login = () => {
    const { signInWithGoogle, handleOnSubmit } = useAuth();

    return (
        <form className=" form-container mt-5" onSubmit={handleOnSubmit} >
            <h2 className="text-center">Please Log in</h2>
            <div className="col-md-6 loginImg">
                <img src={loginImg} alt="..." className="w-100" />
            </div>

            <div className="text-center p-2">
                <button type="button" onClick={signInWithGoogle} className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </button>
            </div>
            {/* <!-- Register buttons --> */}
            <div className="mb-3">
                <p className="text-black text-center ">Are You New User? </p>
                <Link to="/register">
                    <h5 className="text-black text-center text-decoration none mb-3">Please,Register</h5>
                </Link>
            </div>
        </form >
    );
};

export default Login;
