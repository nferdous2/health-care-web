import React from 'react';
import './Expert.css'
const Expert = ({ experts }) => {
    const { name, img, qualification, department, position } = experts;

    return (
        <div>
            <div className="pb-2">
                < div className="expert-container p-3">
                    <img src={img} className="w-25" alt="" />
                    <h5>{name}</h5>
                    <p>Qualification:{qualification}</p>
                    <p>Department:{department}</p>
                    <p>Position:{position}</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;