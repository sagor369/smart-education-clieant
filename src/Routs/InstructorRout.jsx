import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../Hooks/useAxiosSecure';

const InstructorRout = ({children}) => {
    const {user} = useAuth()
    const instructor = true
    const [axiosSecure] = useAxiosSecure()
    const {data: userRole = {} } = useQuery(['userRole'], async()=>{
        const res = await axiosSecure.get(`/user-data/${user?.email}`);
        const result = res.data;
        return result
    })
   
    if(userRole){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default InstructorRout;