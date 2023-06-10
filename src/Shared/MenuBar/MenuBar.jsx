import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div>

            <li>
              <NavLink > User Home</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll'> Enroll Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/selected'> Selected Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/payment'> Payment History</NavLink>
            </li>
            
        </div>
    );
};

export default MenuBar;