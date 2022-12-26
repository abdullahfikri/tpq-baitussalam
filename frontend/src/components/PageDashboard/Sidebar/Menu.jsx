import { Link } from 'react-router-dom';
export default function Menu({ to, icon, text }) {
    return (
        <Link
            to={to}
            className={`flex justify-between ${
                to === 'logout' ? '' : 'hover:text-primary'
            } hover:scale-105 hover:font-bold transition cursor-pointer`}
        >
            <div className="text-lg ">{text}</div>
            <div>{icon}</div>
        </Link>
    );
}
