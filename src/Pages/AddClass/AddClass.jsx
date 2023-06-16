import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const addedClass = (data) => {
    const formData = new FormData()
    const image = data.photo[0]
        formData.append('image', image)
console.log(data)
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IBB_KEY
    }`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
    .then(res =>res.json())
    .then(photo =>{
      console.log(photo)
      const body = {email:user.email, name: user.displayName, seats:data.seats, price: data.price, photos: photo.data.display_url , className: data.className}
      axiosSecure.post('/new-class', {body})
      .then(res => console.log(res.data))
    })

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(addedClass)} className="card-body">
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered w-full"
                  defaultValue={user?.email}
                  readonly
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  {...register("instructorName")}
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
                  <span className="label-text">Class name</span>
                </label>
                <input
                  type="text"
                  {...register("className")}
                  placeholder="Class name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Available seats </span>
                </label>
                <input
                  type="number"
                  {...register("seats")}
                  placeholder="seats "
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">price</span>
                </label>
                <input
                  placeholder="Class price"
                  {...register("price")}
                  type="number"
                  className="input w-full input-bordered"
                />
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
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add class</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
