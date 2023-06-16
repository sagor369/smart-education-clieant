import useAuth from './useAuth';

const useIstructor = () => {
    const {user} = useAuth()
    
    const userRole = ()=>{
        axiosSecure.get(`/user-data/${user?.email}`)
    .then(res => {

        return res.data.role
    }
      )
    }
    
    return [userRole]
};

export default useIstructor;