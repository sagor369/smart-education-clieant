import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: manegUser, isLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/data/${user?.email}`)
            return res.data
        }
    })
    return {manegUser, isLoading}
};

export default useAdmin;