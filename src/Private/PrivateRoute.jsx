import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';
import Loader from '../Components/Loader';

const PrivateRoute = ({children}) => {
    const {user, loader } = use(AuthContext);
    if( loader ){
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;