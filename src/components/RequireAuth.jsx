import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { jwtDecode } from "jwt-decode";


const RequireAuth = ({allowedRoles})=>{
    const {auth} = useAuth();
    const location = useLocation();

    const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) :undefined

    const roles = decoded?.UserInfo?.roles ||[]
    return(
        roles?.find(role=>allowedRoles?.includes(role)) ? <Outlet/> : auth?.accessToken ? <Navigate to='/unauthorized' state={{from:location}} replace/>  : <Navigate to='/' state={{from:location}} replace/>

    )
}

export default RequireAuth