import { useContext } from "react";
import { AuthContext } from "../Shared/AuthContext/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
    
};

export default useAuth;