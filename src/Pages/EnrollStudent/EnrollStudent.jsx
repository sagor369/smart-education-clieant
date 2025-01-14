import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Title from '../../Shared/PageTitle/Title';
import { useQuery } from '@tanstack/react-query';

const EnrollStudent = () => {
    const {user, } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [enrollClass , setEnrollClass] = useState([])
    useEffect(()=>{
         axiosSecure.get(`/enroll-student/${user?.email}` )
            .then(res =>{
                setEnrollClass(res.data)
                
            })
    },[])

    const {
        data: enrollStudent = [],
        isLoading,
        refetch,
      } = useQuery(["enrollStudent", user?.email], async () => {
        const res = await axiosSecure.get(`/enroll-student/${user?.email}` );
        const result = res.data;
        return result;
      });
        return (
        <div>
            <div className="flex justify-center  my-10 bg-opacity-60 bg-lime-700">
        <Title title={"total Enroll Class "}></Title>
      </div>
      {isLoading && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      <h2 className="font-semibold text-3xl uppercase">
        Total Class {enrollStudent.length}
      </h2>

      <table className="table w-full">
        <thead className="w-full">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>insName</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {enrollStudent.map((data, index) => (
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
              <td>${data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default EnrollStudent;