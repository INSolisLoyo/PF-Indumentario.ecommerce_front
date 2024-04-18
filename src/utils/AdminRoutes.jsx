import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = ({
    isAdmin,
    redirectPath = '/'
}) => {
  
    if (!isAdmin) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default AdminRoutes;