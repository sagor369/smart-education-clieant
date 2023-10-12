import React from 'react';
import useAuth from '../../Hooks/useAuth';
import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Title from '../../Shared/PageTitle/Title';

const ManageClass = () => {
    const {user} = useAuth()
    const [axiosSecure]= useAxiosSecure()
    const {data: allClass=[] , isLoading, refetch}= useQuery(['allclass'], async()=>{
        const res = await axiosSecure.get('/all-class');
        const result = res.data 
        console.log(result)
        return result
    })

    const deleteClass = (id) =>{

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/delete-class/${id}`)
      .then(res=>{
        console.log(res.data)
        if(res.data.deletedCount > 0){

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
        }
      })

      

    }

    const handleAxcept = (id) =>{
        axiosSecure.patch('/class-axcept', {id, axcept: 'axcept'})
        .then(res =>{
          if(res.data.modifiedCount >0){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'class is axcepted',
              showConfirmButton: false,
              timer: 1500
            })
          }
          refetch()
        })

    }
    // const {className, price, seats, image, instName, classType}
    return (
        <div>
          <div className="flex justify-center  my-10 bg-opacity-60 bg-lime-700">
        <Title title={"total class "}></Title>
      </div>
            {
                isLoading && <span className="loading loading-spinner loading-lg"></span>
            }
                  <h2 className="font-semibold text-3xl uppercase"> Total Class {allClass.length}</h2>

            <table className="table w-full">
        
        <thead className="w-full">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>insName</th>
            <th>status</th>
            <th>seats</th>
            <th>price</th>
            <th>procces</th>
          </tr>
        </thead>
        <tbody>
          {allClass.map((data, index) => (
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
              <td>{data.classType}</td>
              <td>{data.seats}</td>
              <td>${data.price}</td>
              <th>
                
               
                  <button
                  onClick={()=>deleteClass(data._id)}
                      className="btn w-2/3 btn-error btn-sm"
                    >
                      Delete
                    </button>
                  
                  
                
                {
                  data.classType !== 'axcept'?  <span>
                  <button
                  onClick={()=>handleAxcept(data._id)}
                      className="btn w-2/3 btn-warning btn-sm"
                    >
                      Axcept
                    </button>
                    <br />
                    <button 
                          onClick={()=>handleInstructor(data._id)}
                          className="btn btn-primary w-2/3 btn-sm mr-4" >
                        Deny
                    </button>
                    </span>: <></>
                }
              </th>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default ManageClass;