import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PriveteRouts = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
       return <span className="loading loading-bars loading-md"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PriveteRouts;