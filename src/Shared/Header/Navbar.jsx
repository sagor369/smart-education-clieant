import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import useAuth from "../../Hooks/useAuth";
import { FaBars, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user,  logout } = useAuth();
  const navbar = (
    <>
    {
    }
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-class">All Class</NavLink>
      </li>
      <li>
        <NavLink to="/instructor">Instructors</NavLink>
      </li>
      {user?
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
        : ''
      }
    </>
  );
  const userHandle = (
    <>
      {user ? (
        <>
          <button onClick={logout} className="btn btn-active btn-accent mr-2">
            Logout
          </button>
          {user.photoURL ? (
            <div title={user?.displayName}>
              <img className="w-10 rounded-full" src={user.photoURL} alt="" />
            </div>
          ) : (
            <>
              <FaUser className="w-10 h-10" />
            </>
          )}
        </>
      ) : (
        <>
          <Link className="btn btn-active btn-accent mr-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-active btn-accent" to="/register">
            Register
          </Link>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-lime-700 p-0 min-h-0">
      <div className="navbar-start ml-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars className="w-10 h-10"/>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
            {userHandle}
          </ul>
        </div>
        <div>
          <button className="flex gap-2">
            <img className="w-10 h-10 rounded" src={logo} alt="" />
            <h3 className="font-bold lg:text-3xl uppercase">smarty educations</h3>
          </button>
        </div>
      </div>
      <div className="navbar-center hidden rounded-l-full py-2 text-white pl-4 lg:flex bg-purple-700">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>
      <div className="navbar-end hidden lg:flex bg-purple-700 pr-4 py-2 ">
        {userHandle}
      </div>
    </div>
  );
};

export default Navbar;
