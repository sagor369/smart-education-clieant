import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const EnrollStudent = () => {
    const {user, } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [enrollClass , setEnrollClass] = useState([])
    useEffect(()=>{
         axiosSecure.get(`/enroll-student/${user?.displayName}` )
            .then(res =>{
                setEnrollClass(res.data)
            })
    },[])
    console.log(enrollClass)
        return (
        <div>
            
        </div>
    );
};

export default EnrollStudent;