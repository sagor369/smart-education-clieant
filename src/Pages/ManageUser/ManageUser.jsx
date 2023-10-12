import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Title from "../../Shared/PageTitle/Title";

const ManageUser = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allUser = [],
    isLoading,
    refetch,
  } = useQuery(["allUser", user?.email], async () => {
    const res = await axiosSecure.get("/all-user");
    const result = res.data;
    return result;
  });

  const handleInstructor = (id) => {
    axiosSecure.patch("/update-user", { id, role: "instructor" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "user update successfull ",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const handleAdmin = (id) => {
    axiosSecure.patch("/update-user", { id, role: "admin" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "user update successfull ",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center  my-10 bg-opacity-60 bg-lime-700">
        <Title title={"all user "}></Title>
      </div>
      {isLoading && <span className="loading loading-bars loading-lg"></span>}
      <h2 className="font-semibold text-3xl uppercase">
        total user {allUser.length}
      </h2>
      <table className="table w-full">
        <thead className="w-full">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>email</th>
            <th>role</th>
            <th>manage User</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((data, index) => (
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
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.role}</td>
              <th>
                {data.role !== "admin" ? (
                  <span>
                    <button
                      onClick={() => handleAdmin(data._id)}
                      className="btn w-2/3 btn-warning btn-sm"
                    >
                      make admin
                    </button>
                    <br />
                    <button
                      onClick={() => handleInstructor(data._id)}
                      className="btn btn-primary w-2/3 btn-sm mr-4"
                    >
                      make instructor
                    </button>
                  </span>
                ) : (
                  <></>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
