import{ useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SelectedClass = () => {
  const [axiosSecure] = useAxiosSecure()
    const [select, setSelect] = useState([])
    useEffect(()=>{
      axiosSecure.get('/my-class')
      .then(data => {
        setSelect(data.data)
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
            <th>Seats</th>
            <th>Price</th>
            <th>delete/pay</th>
          </tr>
        </thead>
        <tbody>
          {
            select.map((data, index) =>
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
            <td>{data.seats}</td>
            <td>${data.price}</td>
            <th>
              <span >
              <button className="btn btn-primary btn-sm mr-4">pay</button>
              <button className="btn btn-warning btn-sm">delete</button>

              </span>
            </th>
          </tr>
              
              )
          }
          
          
          
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
