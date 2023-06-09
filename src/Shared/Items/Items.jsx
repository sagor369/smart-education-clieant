
const Items = ({item}) => {
    const {className, description ,image, instructorName,price    } =item
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 w-full"
          src={image}
          alt={`${className} image`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {className}
        </h2>
        <p>{instructorName}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Price : ${price}</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <p>{description}</p>
        <div className="card-actions">
      <button className="btn btn-primary">Add To Card</button>
    </div>
      </div>
    </div>
  );
};

export default Items;
