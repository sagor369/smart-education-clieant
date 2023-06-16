import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth()
  const { data: select = [], isLoading, refetch } = useQuery(["user"], async () => {
    const res = await axiosSecure.get(`/my-class/${user?.email}`, );
    const result = res.data;
    return result;
  });
  console.log(select)

  const deleteClass = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-class/${id}`).then((data) => {
          const deleteCount = data.data.deletedCount;
          console.log(deleteCount);
          if (deleteCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="">
      {isLoading && 
      <progress className="progress w-56"></progress>
      }
      <table className="table w-full">
        {/* head */}
        <thead className="w-full">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Seats</th>
            <th>Price</th>
            <th>delete/pay</th>
          </tr>
        </thead>
        <tbody>
          {select.map((data, index) => (
            <tr key={data._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={data.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{data.className}</td>
              <td>{data.seats}</td>
              <td>${data.price}</td>
              <th>
                <span>
                  <button  className="btn btn-primary btn-sm mr-4" disabled={data?.seats <1}>
                    <Link
                      to={`/dashboard/payment/${data._id}`}
                    >
                      pay
                    </Link>
                  </button>
                  <button
                    onClick={() => deleteClass(data._id)}
                    className="btn btn-warning btn-sm"
                  >
                    delete
                  </button>
                </span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
