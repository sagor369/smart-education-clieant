import { Link } from "react-router-dom";

const Instructor = ({ item }) => {
  const { image, name, totalClass, email } = item;

  return (
    <div className="md:flex rounded-2xl bg-base-100 border border-lime-200 shadow-xl">
      <figure>
        <img
        className="md:w-52 w-full h-56 rounded-s-2xl"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Total Classes : {totalClass} class</p>
        <p>Email : {email} </p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={`/instructor-class/${email}`}>All Class</Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
