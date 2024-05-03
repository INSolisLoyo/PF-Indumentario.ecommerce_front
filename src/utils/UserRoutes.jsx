import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = ({
    isRegister,
    redirectPath = '/'
}) => {
    console.log(isRegister);
    if (!isRegister) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default UserRoutes;