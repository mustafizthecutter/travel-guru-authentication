import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const useAuthHook = () => {
    const all = useContext(AuthContext);
    return all;
};

export default useAuthHook;