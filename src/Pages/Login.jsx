import React, { use, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/firebase_init';

const Login = () => {
    const {loginUser} = use(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    
// Login
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        
        loginUser(email, password)
        .then(()=>{
            toast.success('Login Successful!')
            navigate(`${location.state? location.state: '/'}`)
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }

    const emailRef = useRef();
    // Forgot Password
    const handleForgotPassword = () =>{
        const email = emailRef.current.value;

        sendPasswordResetEmail( auth, email)
        .then(()=>{
            toast.success('Password reset email sent!')
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }

    return (
        <div className='flex justify-center items-center h-[calc(100vh-81px)]'>
            <div className="card p-10 bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
                <h2 className='text-3xl font-bold text-center mb-7'>Login your account</h2>
                <fieldset className="fieldset">
                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' ref={emailRef} className="input w-full mb-4" placeholder="Email" required />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input w-full mb-4" placeholder="Password" required />

                    <div><a onClick={handleForgotPassword} className="link link-hover text-secondary">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>

                    <p className='text-center font-semibold pt-5'>Don't Have An Account ? <Link to="/auth/register" className='text-secondary'>Register</Link> </p>

                </fieldset>
            </form>
            </div>
        </div>
    );
};

export default Login;