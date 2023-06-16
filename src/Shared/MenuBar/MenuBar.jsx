import { NavLink} from 'react-router-dom';


const MenuBar = ({data}) => {
    
    return (
        <div>
          {
            data?.admin && 
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
            data?.instructor && 
          <>
         
            <li>
              <NavLink to={`/dashboard/instructor-class`}> My Classes</NavLink>
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
            data?.user && <>
            <li>
              <NavLink to='/dashboard/enroll'> Enroll Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/selected'> Selected Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/payments'> Payment History</NavLink>
            </li>
            </>
          }
  
        </div>
    );
};

export default MenuBar;