import { Routes, Route, Navigate } from 'react-router-dom';

import PageAuth from './components/PageAuth/PageAuth';
import PageDashboard from './components/PageDashboard/PageDashboard';

import LoggedInRoutes from './routes/LoggedInRoutes';
import NotLoggedInRoutes from './routes/NotLoggedInRoutes';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard/" />} />
                <Route element={<LoggedInRoutes />}>
                    <Route path="/dashboard/*" element={<PageDashboard />} />
                </Route>
                {/* <Route element={<LoggedInRoutes />}>
                    <Route path="/dashboard" element={<PageDashboard />} />
                </Route> */}
                <Route element={<NotLoggedInRoutes />}>
                    <Route path="/login" element={<PageAuth />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
