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
          element: <AllClass></AllClass>
        },
        {
          path:'instructor',
          element:<AllInstructor></AllInstructor>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children: [
        {
          path:'my-class',
          element:<MyClass></MyClass>
        },
        {
          path:'enroll',
          element:<EnrollClass></EnrollClass>
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