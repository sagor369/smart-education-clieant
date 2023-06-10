import { useState } from "react";
import Title from "../../Shared/PageTitle/Title";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";
import Footer from "../../Shared/Footer/Footer";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const navigate = useNavigate()
  const { logIn, googleUser } = useAuth()
  const [open, setOpen]= useState(false)
  const { register, handleSubmit,formState: { errors },} = useForm();
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  const handaleLogin = (data) => {

    logIn(data.email, data.password)
    .then((result)=>{
      console.log(result)
      navigate(from)
    })
    .catch(error =>{
      console.log(error.message)
    })
  };
  const handlePassword = ()=>{
    setOpen(!open)

  }

  const googleHandle = () =>{
    googleUser()
    .then((result)=>{
      console.log(result)
      navigate(from)

    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="flex justify-center bg-opacity-60 mt-20 bg-lime-700">
      <Title title={"Please Login "}></Title>
    </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handaleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.firstName?.type === "required" && (
                  <p>Email is required</p>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="input-group ">
                 {
                  open ?  
                  <input
                  {...register("password", { required: true })}
                   type="password"
                   placeholder="passwore"
                   className="input w-full input-bordered"
                 />
                 :
                 <input
                 {...register("password", { required: true })}
                  type="text"
                  placeholder="passwore"
                  className="input w-full input-bordered"
                />
                 }
                  <span onClick={handlePassword}>{
                    open ? 
                    <FaEye />
                    :
                    <FaEyeSlash />
                    }
                    
                  </span>
                </label>
                {errors.firstName?.type === "required" && (
                  <p>password is required</p>
                )}
              </div>
              {/* <div className="form-control ">
                <label className="label">
                  <span className="label-text">Confrim Password</span>
                </label>
                <label className="input-group ">
                 {
                  open ?  
                  <input
                  {...register("password", { required: true })}
                   type="password"
                   placeholder="passwore"
                   className="input w-full input-bordered"
                 />
                 :
                 <input
                 {...register("password", { required: true })}
                  type="text"
                  placeholder="passwore"
                  className="input w-full input-bordered"
                />
                 }
                  <span onClick={handlePassword}>{
                    open ? 
                    <FaEye />
                    :
                    <FaEyeSlash />
                    }
                    
                  </span>
                </label>
                {errors.firstName?.type === "required" && (
                  <p>password is required</p>
                )}
              </div> */}

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="pl-6"><small>create a new account <Link to='/register' className="text-blue-500">Register</Link></small></p>
            <div className="divider">OR</div>
            <div className="bg-yellow-300 rounded-b-2xl flex justify-center items-center p-4 ">
              <button onClick={googleHandle}>
              <FaGoogle className="w-10 h-10"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
