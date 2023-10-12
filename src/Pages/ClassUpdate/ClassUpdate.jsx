import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const ClassUpdate = () => {
  const { user } = useAuth();
  const {id }= useParams()
  const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
  } = useForm();

  const { data, refetch } = useQuery(["classes", id], async () => {
    const res = await axiosSecure.get(`/instructor-update-class/${id}`);
    const result = res.data;
    return result;
  });

  const updateclass = (data) =>{

    axiosSecure.patch(`/modify-instructor-class/${id}`, {data} ) 
    .then(res =>{
      if(res.data.modifiedCount>0){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'update successfull',
          showConfirmButton: false,
          timer: 1500
        })
        refetch()
      }
    })   
  }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(updateclass)} className="card-body">
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email",)}
                  placeholder="email"
                  className="input input-bordered w-full"
                  value={user?.email}
                  readonly
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  {...register("instructorName",)}
                  placeholder="enter your name"
                  className="input w-full input-bordered"
                  value={user?.displayName}
                  readonly
                />
              </div>
            </div>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text">Available seats </span>
                </label>
                <input
                  type="number"
                  {...register("seats",)}
                  defaultValue={data?.seats}
                  placeholder="seats "
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">price</span>
                </label>
                <input
                  placeholder="Class price"
                  {...register("price",)}
                  defaultValue={data?.price}
                  type="number"
                  className="input w-full input-bordered"
                />
              </div>
            </div>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text">Class name</span>
                </label>
                <input
                  type="text"
                  {...register("className",)}
                  defaultValue={data?.className}
                  placeholder="Class name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">update class</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClassUpdate;
