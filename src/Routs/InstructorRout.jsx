import React from 'react';
import useIstructor from '../Hooks/useIstructor';
import { Navigate } from 'react-router-dom';

const InstructorRout = ({children}) => {
    const [userRole] = useIstructor() 
    if(userRole?.admin){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default InstructorRout;