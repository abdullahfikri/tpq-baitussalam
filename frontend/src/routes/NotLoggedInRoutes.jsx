import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function NotLoggedInRoutes() {
    const { user } = useSelector((state) => state);
    // console.log(auth);
    return user ? <Navigate to={`/dashboard`} /> : <Outlet />;
}
