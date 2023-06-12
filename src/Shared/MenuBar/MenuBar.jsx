import { NavLink } from 'react-router-dom';
import useAdmin from "../../Hooks/useAdmin";


const MenuBar = () => {
    const {manegUser} = useAdmin()
    console.log(manegUser)
    return (
        <div>
          {
            manegUser?.admin && 
          <>
          <li>
              <NavLink > Admin Home</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll'> Enroll Classes</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/selected'> manege Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/payment'> menage user</NavLink>
            </li>
            
          </>
          }
          {
            manegUser?.instructor && 
          <>
          <li>
              <NavLink > Instructor Home</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/my-class'> My Classes</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/add-class'> Add Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll-class'> Enroll class</NavLink>
            </li>
            
          </>
          }
          {
            manegUser?.user && <>
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
            </>
          }


            
            
        </div>
    );
};

export default MenuBar;