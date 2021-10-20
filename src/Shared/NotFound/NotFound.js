import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/error.png'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '85%' }} src={notfound} alt="" />
            <br />
            <div>
                <Link to="/"><button className="mt-3 btn btn-success justify-content-center align-items-center ms-5 ">Go Back</button>
                </Link>
            </div>
        </div >
    );
};

export default NotFound;