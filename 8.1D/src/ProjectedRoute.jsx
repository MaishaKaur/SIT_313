import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SigninPage from './Signin';
import { getAuth } from 'firebase/auth';

const ProjectedRoute = ({ children }) => {
    const auth = getAuth();
    const isAuthenticated = auth.currentUser != null;

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/Signin'); // Redirect to login page if not authenticated
        }
    }, []);

    return children;
}

export default ProjectedRoute