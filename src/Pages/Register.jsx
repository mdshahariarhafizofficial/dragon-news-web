import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const {createUser, setUser} = use(AuthContext)
    // const [successMessage, setSuccessMessage] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');

    // Register 
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then( (result) =>{
            setUser(result.user);
            toast.success('Register Successfully');
            navigate('/')
        } ).catch( (error) => {
          toast.error(error.message)  
        } )
        
    }

    return (
        <div className='flex justify-center items-center h-[calc(100vh-81px)]'>
            <div className="card p-10 bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
                <h2 className='text-3xl font-bold text-center mb-7'>Register your account</h2>
                <fieldset className="fieldset">

                    {/* Your Name */}
                    <label className="label">Your Name</label>
                    <input 
                    name='name'
                    type="text" 
                    className="input w-full mb-4" 
                    placeholder="Your Name" 
                    required />

                    {/* Photo Url */}
                    <label className="label">Photo URL</label>
                    <input 
                    name='photo'
                    type="url" 
                    className="input w-full mb-4" 
                    placeholder="Photo URL"
                    required />

                    {/* Email */}
                    <label className="label">Email</label>
                    <input 
                    name='email'
                    type="email" 
                    className="input w-full mb-4" 
                    placeholder="Email"
                    required />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input 
                    name='password'
                    type="password" 
                    className="input w-full mb-4" 
                    placeholder="Password" 
                    required />

                    <button 
                    type='submit'
                    className="btn btn-neutral mt-4">Register</button>

                    <p className='text-center font-semibold pt-5'>Have An Account ? <Link to="/auth/login" className='text-secondary'>Login</Link> </p>

                </fieldset>
            </form>
            </div>
        </div>
    );
};

export default Register;