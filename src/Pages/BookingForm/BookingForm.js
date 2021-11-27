import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './Booking.css'
const BookingForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => alert('Booked successfully', data);
    return (

        <div className="form-book">
            <h2 className="text-center">Please Book</h2>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-outline mt-3 mb-4 p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea className="form-outline mb-4 p-2"{...register("description", { required: true })} placeholder="Description" />
                <textarea className="form-outline mb-4 p-2"{...register("address", { required: true })} placeholder="Address" />
                <input type="number" className="form-outline mb-4 p-2"{...register("phone", { required: true })} placeholder="Phone Number" />
                <input className="btn-click" type="submit" />
                <Link to="/home">
                    <p>Finish Booking?
                        Back to home
                    </p>
                </Link>
            </form>
        </div>

    );
};

export default BookingForm;
