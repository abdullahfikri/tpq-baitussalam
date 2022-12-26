import SideBar from './Sidebar/SideBar';
import { useSelector } from 'react-redux';
import Content from './Content/Content';
export default function PageDashboard({}) {
    const { user } = useSelector((state) => ({ ...state }));
    const type = user && user.type;
    // console.log(type);
    // TODO: Add a switch statement to render the correct sidebar based on the user type
    return (
        <div className="flex h-full">
            <SideBar type={type} />
            <Content user={user} />
        </div>
    );
}
