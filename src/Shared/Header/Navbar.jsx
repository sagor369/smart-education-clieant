import { NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'

const Navbar = () => {
  const navbar = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">All Class</NavLink>
      </li>
      <li>
        <NavLink to="/food/salad">Instructors</NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-lime-700 p-0 min-h-0">
      <div className="navbar-start ml-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <div>
        <button className="flex gap-2">
            <img className="w-10 h-10 rounded" src={logo} alt="" />
            <h3 className="font-bold text-3xl uppercase">smarty educations</h3>
        </button>
        </div>
      </div>
      <div className="navbar-center hidden rounded-l-full py-2 text-white pl-4 lg:flex bg-purple-700">
        <ul className="menu menu-horizontal px-1">
          {navbar}
        </ul>
      </div>
      <div className="navbar-end bg-purple-700 pr-4 py-2">
        <NavLink className="btn btn-active btn-accent mr-2" to='/login'> Login</NavLink>
        <NavLink className="btn btn-active btn-accent" to='/register'> Register</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
