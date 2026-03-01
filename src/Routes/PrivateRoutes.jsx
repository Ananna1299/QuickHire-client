import React from 'react';

import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location= useLocation()
    

    if (loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (user){
        return children
    }
    if (!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>

    }
};

export default PrivateRoute;