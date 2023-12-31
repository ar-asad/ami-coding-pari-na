import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";


const Navbar = () => {

    const { user, logOut, setLoading } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        setLoading(false);
        toast.success("User LogOut")
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/khoj'>Khoj-the-search</Link></li>
        {
            user ?
                <li>
                    <button onClick={handleLogOut}>LogOut</button>
                </li>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar fixed bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Khoj-Search</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-medium px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div title={user?.displayName} className="avatar mr-4">
                        <div className="w-12 h-12 rounded-full">
                            <img src={user?.photoURL} alt='userphoto' />
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;