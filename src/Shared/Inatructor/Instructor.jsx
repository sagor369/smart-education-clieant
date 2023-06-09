const Instructor = ({ item }) => {
  const { image, name, totalClass, email } = item;
  console.log(item);

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
        className="md:w-52 w-full h-56"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Total Classes : {totalClass} class</p>
        <p>Email : {email} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">All Class</button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
