import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AllClass from "../Pages/AllClass/AllClass";
import AllInstructor from "../Pages/Instructors/AllInstructor";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyClass from "../Pages/MyClasses/MyClass";
import EnrollClass from "../Pages/EnrollClass/EnrollClass";
import PriveteRouts from "../PriveteRouts/PriveteRouts";
import InstructorClass from "../Pages/Home/InstructorClass";
import SelectedClass from "../Pages/SelectedClass/SelectedClass";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import Payment from "../Pages/Payment/Payment";
import UserHome from "../Pages/UserHome/UserHome";
import ClassUpdate from "../Pages/ClassUpdate/ClassUpdate";
import AddClass from "../Pages/AddClass/AddClass";
import EnrollStudent from "../Pages/EnrollStudent/EnrollStudent";
import InstructorRout from "./InstructorRout";
import ManageUser from "../Pages/ManageUser/ManageUser";
import ManageClass from "../Pages/ManageClass/ManageClass";
import EnrollUser from "../Pages/EnrollUser/TotalEnrollClass";
  
  export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: 'all-class',
          element: <PriveteRouts><AllClass></AllClass></PriveteRouts>
        },
        {
          path:'instructor',
          element:<PriveteRouts><AllInstructor></AllInstructor></PriveteRouts>
        },
        {
          path:'instructor-class/:email',
          element:<PriveteRouts><InstructorClass></InstructorClass></PriveteRouts>,
         
          

        }
      ]
    },
    {
      path:'/dashboard',
      element:<PriveteRouts><Dashboard></Dashboard></PriveteRouts>,
      children: [
        {
          path: 'users',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'manageClass',
          element: <ManageClass></ManageClass>
        },
        {
          path: 'enroll-user',
          element:<EnrollUser></EnrollUser>
        },
        {
          path: 'instructor-home',
          element: <InstructorRout></InstructorRout>
        },
       
        {
          path:'instructor-class',
          element:<InstructorRout><MyClass></MyClass></InstructorRout>
        },
        {
          path:'update-class/:id',
          element: <InstructorRout><ClassUpdate></ClassUpdate></InstructorRout>
        },
        {
          path:'add-class',
          element: <InstructorRout><AddClass></AddClass></InstructorRout>
        },
        {
          path: 'enroll-class',
          element:<InstructorRout><EnrollStudent></EnrollStudent></InstructorRout>
        },
        {
          path:'enroll',
          element:<EnrollClass></EnrollClass>
        },
        {
          path:'user-home',
          element:<EnrollClass></EnrollClass>
        },
        {
          path:'selected',
          element:<SelectedClass></SelectedClass>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>
        },
        {
          path:'payments',
          element:<PaymentHistory></PaymentHistory>
        }
      ]
      
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'register',
      element: <Register></Register>
    }
  ])