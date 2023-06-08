import { useState } from "react";
import Title from "../../Shared/PageTitle/Title";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [open, setOpen]= useState(false)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const handaleLogin = (data) => {
      console.log(data);
    };
    const handlePassword = ()=>{
      setOpen(!open)
  
    }
  
  return (
    <div>
      <Title title={"Please Register "}></Title>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
                  {open ? (
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="passwore"
                      className="input w-full input-bordered"
                    />
                  ) : (
                    <input
                      {...register("password", { required: true })}
                      type="text"
                      placeholder="passwore"
                      className="input w-full input-bordered"
                    />
                  )}
                  <span onClick={handlePassword}>
                    {open ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </label>
                {errors.firstName?.type === "required" && (
                  <p>password is required</p>
                )}
              </div>
              <div className="form-control ">
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
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
