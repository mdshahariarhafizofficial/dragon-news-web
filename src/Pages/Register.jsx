import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-81px)]'>
            <div className="card p-10 bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='text-3xl font-bold text-center mb-7'>Register your account</h2>
                <form className="fieldset">

                    {/* Your Name */}
                    <label className="label">Your Name</label>
                    <input type="text" className="input w-full mb-4" placeholder="Your Name" />

                    {/* Photo Url */}
                    <label className="label">Photo URL</label>
                    <input type="url" className="input w-full mb-4" placeholder="Photo URL" />

                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" className="input w-full mb-4" placeholder="Email" />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" className="input w-full mb-4" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>

                    <p className='text-center font-semibold pt-5'>Have An Account ? <Link to="/auth/login" className='text-secondary'>Login</Link> </p>

                </form>
            </div>
            </div>
        </div>
    );
};

export default Register;