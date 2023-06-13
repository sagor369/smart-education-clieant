import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Items = ({item}) => {
    const {className, description ,image, instructorName,price, seats } =item
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()


    const addClass = () =>{
      axiosSecure.post('/add-class', {className, description ,image, instructorName,price, email:user?.email, seats})
      .then(data => {
       const statuseOk = data.data.insertedId
       if(statuseOk){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'This class is added ',
          showConfirmButton: false,
          timer: 1500
        })
       }

      })
    }


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 w-full"
          src={image}
          alt={`${className} image`}
        />
      </figure>
      <div className= {`${seats < 1 ? 'bg-red-400' : ''} card-body`}>
        <h2 className="card-title">
          {className}
        </h2>
        <p><span className="font-bold "> Instructor Name:</span> {instructorName}</p>
        <p><span className="font-bold ">Description </span>{description}</p>
        <div className="card-actions justify-between my-4">
          <div className="badge badge-outline">Price : ${price}</div>
          <div className="badge badge-outline">Total Seats : {seats}</div>
        </div>
        <div className="card-actions">
          {
            user?
            <button onClick={addClass} className="btn btn-primary">Add To Card</button>
            :
            <Link className="btn btn-warning" to='/login'>Pleace login</Link>
          }
      
    </div>
      </div>
    </div>
  );
};

export default Items;
