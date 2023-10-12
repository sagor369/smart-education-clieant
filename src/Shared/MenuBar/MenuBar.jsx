import { Link, NavLink} from 'react-router-dom';


const MenuBar = ({data}) => {

  const mainLink = <>
  <li>
    <Link to={"/"}>Home</Link>
  </li>
  <li>
    <Link to={"/all-class"}>All Class</Link>
  </li>
  <li>
    <Link to={"/instructor"}>All Instructor</Link>
  </li>
  </>
    
    return (
        <div>
          {
            data?.admin && 
          <>
          <li>
              <NavLink > Admin Home</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll-user'> Enroll Classes</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/manageClass'> manege Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/users'> menage user</NavLink>
            </li>
            <div className='mt-20'>
            <hr />
            {mainLink}
            </div>
            
          </>
          }
          {
            data?.instructor && 
          <>
            
            <li>
              <NavLink > Instructor Home</NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/instructor-class`}> My Classes</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/add-class'> Add Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll-class'> Enroll class</NavLink>
            </li>

            <div className='mt-20'>
            <hr />
            {mainLink}
            </div>
            
          </>
          }
          {
            data?.user && <>
            <li>
              <NavLink to='/dashboard/user-home'> Student home </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll'> Enroll Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/selected'> Selected Class</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/payments'> Payment History</NavLink>
            </li>
            <div className='mt-20'>
            <hr />
            {mainLink}
            </div>
            </>
          }
  
        </div>
    );
};

export default MenuBar;