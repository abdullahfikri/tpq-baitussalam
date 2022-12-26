import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import PageAuth from '../components/PageAuth/PageAuth';

export default function LoggedInRoutes() {
    const { user } = useSelector((state) => ({ ...state }));
    return user ? <Outlet /> : <Navigate to={'/login'} />;
}
