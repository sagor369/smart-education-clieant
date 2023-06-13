import useAuth from "../../Hooks/useAuth"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import { useEffect, useState } from "react";


const PaymentHistory = () => {
    const {user, } = useAuth()
const [axiosSecure] = useAxiosSecure()
const [payment , setPayment] = useState([])
useEffect(()=>{
     axiosSecure.get(`/payments/${user?.email}`)
        .then(res =>{
            console.log(res.data)
            setPayment(res.data)
        })
},[])
    return (
        <div className="">
        <table className="table w-full">
          {/* head */}
          <thead className="w-full">
            <tr>
              <th>#</th>
              <th>Class ID </th>
              <th>Class Name</th>
              <th>Price</th>
              <th>TR ID</th>
            </tr>
          </thead>
          <tbody>
            {
              payment.map((data, index) =>
                <tr key={data._id}>
              <th>
               {index +1 }
              </th>
              <td>
                {data._id}
              </td>
              <td>
                {data.className}
              </td>
              <td>${data.price}</td>
              <th >
                {data.transactionId}
              </th>
            </tr>
            )}

          </tbody>
        </table>
      </div>
    );
};

export default PaymentHistory;