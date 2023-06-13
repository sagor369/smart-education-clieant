import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const EnrollClass = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [enrollClass , setEnrollClass] = useState([])
    useEffect(()=>{
         axiosSecure.get(`/enroll/${user?.email}`)
            .then(res =>{
                setEnrollClass(res.data)
            })
    },[])
    

    
    return (
        <div className="">
      <table className="table w-full">
        {/* head */}
        <thead className="w-full">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {
            enrollClass.map((data, index) =>
              <tr key={data._id}>
            <th>
             {index +1 }
            </th>
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
            <td>
              {data.className}
            </td>
            <td>${data.price}</td>
            <th className="text-green-500">
              paid
            </th>
          </tr>
              
              )
          }
          
          
          
        </tbody>
      </table>
    </div>
    );
};

export default EnrollClass;