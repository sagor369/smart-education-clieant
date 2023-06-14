import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';


const MenuBar = () => {
  const [manegUser, setManeguser] = useState({})
  const [axiosSecure] = useAxiosSecure()
  const {user} = useAuth()
  useEffect(()=>{
    axiosSecure.get(`/user-data/${user?.email}`)
    .then(res =>{
     setManeguser(res.data)
    })
  },[manegUser])
    
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
            manegUser?.user && <>
            <li>
              <NavLink to='/dashboard/user'> User Home</NavLink>
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
            </>
          }


            
            
        </div>
    );
};

export default MenuBar;