import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = ({
    isRegister,
    redirectPath = '/'
}) => {
    if (!isRegister) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default AdminRoutes;