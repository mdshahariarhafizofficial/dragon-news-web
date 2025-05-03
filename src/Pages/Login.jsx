import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-81px)]'>
            <div className="card p-10 bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='text-3xl font-bold text-center mb-7'>Login your account</h2>
                <form className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full mb-4" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full mb-4" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>

                    <p className='text-center font-semibold pt-5'>Don't Have An Account ? <Link to="/auth/register" className='text-secondary'>Register</Link> </p>

                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;