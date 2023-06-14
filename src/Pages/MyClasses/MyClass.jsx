
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import{FaEdit} from 'react-icons/fa'


const MyClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user } = useAuth()
    const { data: classes = [], refetch } = useQuery(["classes", user?.email], async () => {
        const res = await axiosSecure.get(`/instructor-class/${user.email}`);
        const result = res.data;
        return result;
      });

    // TODO handla delete 
    const handlaDelete = (id)=>{
        // axiosSecure.get(`/delete-class/${id}`)
        // .then(res =>{
        //     console.log(res.data)
        // })
        refetch()

    }
    const classEdit= (id) =>{
        console.log(id)
    }


    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>photo</th>
        <th>Class name</th>
        <th>Price</th>
        <th>Seats</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        classes?.map((item, index)=>
            <tr 
            key={item._id}>
        <th>
          {index +1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            </div>
          </div>
        </td>
        <td>
        {item.className}
        </td>
        <td>
        ${item.price}
        </td>
        <td>
        {item.seats}
        </td>
        <td>
          <button onClick={()=>classEdit(item._id)} className="btn "><FaEdit/></button>
          <button onClick={()=>handlaDelete(item._id)} className="btn btn-warning">delete</button>
        </td>
      </tr>
            )
      }
      
      
      
    </tbody>
  </table>
</div>
    );
};

export default MyClass;