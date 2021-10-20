import React from 'react';
import { Link } from 'react-router-dom';

const Submit = () => {
    return (
        <div>
            <form className="form-container mt-5 p-5">
                {/* Name input */}
                <div class="form-outline mb-4">
                    <input type="text" id="form4Example1" class="form-control" />
                    <label class="form-label" for="form4Example1">Name</label>
                </div>

                {/* Email input  */}
                <div class="form-outline mb-4">
                    <input type="email" id="form4Example2" class="form-control" />
                    <label class="form-label" for="form4Example2">Address</label>
                </div>
                {/* Number input  */}
                <div class="form-outline mb-4">
                    <input type="number" id="form6Example6" class="form-control" />
                    <label class="form-label" for="form6Example6">Phone</label>
                </div>
                {/* Message input  */}
                <div class="form-outline mb-4">
                    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                    <label class="form-label" for="form4Example3">Message</label>
                </div>

                {/* Submit button  */}

                <Link to="/home">
                    <button type="submit" className="btn btn-primary btn-block mb-2 mx-2" >Submit </button>
                </Link>
            </form>
        </div>
    );
};

export default Submit;