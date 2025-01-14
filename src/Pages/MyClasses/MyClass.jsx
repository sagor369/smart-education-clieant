
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import{FaEdit} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


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
        .then(res =>{
            if(res.data.deletedCount >0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              refetch()
            }
        })
          
        }
      })
        
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
          <Link to={`/dashboard/update-class/${item._id}`} className="btn "><FaEdit/></Link>
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