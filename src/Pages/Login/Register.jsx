import { useState } from "react";
import Title from "../../Shared/PageTitle/Title";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const { register, handleSubmit,formState: { errors } } = useForm();

  const handaleLogin = (data) => {
    const formData = new FormData()

    console.log(data);
  };
  const handlePassword = () => {
    setOpen(!open);
  };
  const passwordhandle = (event) => {
    const formValue = event.target.value;
    setPassword(formValue);
    setDisable(true);
  };
  const passwordChack = (event) => {
    const formValue = event.target.value;
    if (formValue === password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

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
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div onBlur={passwordhandle} className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="input-group ">
                  {open ? (
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/,
                      })}
                      type="password"
                      placeholder="passwore"
                      className="input w-full input-bordered"
                    />
                  ) : (
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/,
                      })}
                      type="text"
                      placeholder="passwore"
                      className="input w-full input-bordered"
                    />
                  )}
                  <span onClick={handlePassword}>
                    {open ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </label>
                {errors.password?.type === "required" && (
                  <p>password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p>minimum 8 character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p>Maximum 20 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p>At least one special character, one leter, one number</p>
                )}
              </div>

              <div onBlur={passwordChack} className="form-control ">
                <label className="label">
                  <span className="label-text">Confrim Password</span>
                </label>
                <label>
                  {open ? (
                    <input
                      {...register("repassword", {
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/,
                      })}
                      type="password"
                      placeholder="confrim password"
                      className="input w-full input-bordered"
                    />
                  ) : (
                    <input
                      {...register("repassword", {
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                        pattern: /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      })}
                      type="text"
                      placeholder="confrim password"
                      className="input w-full input-bordered"
                    />
                  )}
                </label>
                {errors.repassword?.type === "required" && (
                  <p>password is required</p>
                )}
                {errors.repassword?.type === "minLength" && (
                  <p>minimum 8 character</p>
                )}
                {errors.repassword?.type === "maxLength" && (
                  <p>Maximum 20 character</p>
                )}
                {errors.repassword?.type === "pattern" && (
                  <p>At least one special character, one leter, one number</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="file"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={disable}
                  className="btn btn-active btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="pl-6"><small>already have an account  <Link to='/login' className="text-blue-500">Login</Link></small></p>
            <div className="divider">OR</div>
            <div className="bg-yellow-300 rounded-b-2xl flex justify-center items-center p-4 ">
              <button>
              <FaGoogle className="w-10 h-10"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
