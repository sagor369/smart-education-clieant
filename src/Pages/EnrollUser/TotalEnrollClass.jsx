import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/PageTitle/Title";

const TotalEnrollClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allEnrollClass = [],
    isLoading,
    refetch,
  } = useQuery(["allUser", user?.email], async () => {
    const res = await axiosSecure.get("/total-enroll-class");
    const result = res.data;
    return result;
  });
  console.log(allEnrollClass);
  return (
    <div>
      <div className="flex justify-center  my-10 bg-opacity-60 bg-lime-700">
        <Title title={"total Enroll Class "}></Title>
      </div>
      {isLoading && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      <h2 className="font-semibold text-3xl uppercase">
        Total Class {allEnrollClass.length}
      </h2>

      <table className="table w-full">
        <thead className="w-full">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>insName</th>
            <th>userName</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {allEnrollClass.map((data, index) => (
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
              <td>{data.instructorName}</td>
              <td>{data.userName}</td>
              <td>${data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalEnrollClass;
