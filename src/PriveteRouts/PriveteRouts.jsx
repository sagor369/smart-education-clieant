import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PriveteRouts = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PriveteRouts;