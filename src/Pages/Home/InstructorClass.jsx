import { useLoaderData, useParams } from "react-router-dom";
import Items from "../../Shared/Items/Items";
import Title from "../../Shared/PageTitle/Title";
import { useEffect,  } from "react";

const InstructorClass = () => {
    // const [classes, setClasses] = useState([])
    const email = useParams()
    useEffect(()=>{
        // fetch(`http://localhost:5000/instructor-class/${email}`)
    },[])
    console.log(email)
  return (
    <div>
      <div className="flex justify-center mt-20 bg-opacity-60 bg-lime-700">
        <Title title={"Instructor Classes "}></Title>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((data) => (
          <Items key={data._id} item={data}></Items>
        ))}
      </div> */}
    </div>
  );
};

export default InstructorClass;
