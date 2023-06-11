import { useQuery } from "@tanstack/react-query";
import Instructor from "../../Shared/Inatructor/Instructor";
import Title from "../../Shared/PageTitle/Title";
import { Helmet } from "react-helmet-async";

const AllInstructor = () => {
  const { data: users = [] } = useQuery(["user"], async () => {
    const res = await fetch(
      "http://localhost:5000/users?instructor=instructor"
    );
    const result = res.json();
    return result;
  });
  return (
    <div>
      <Helmet>
                <title>Smart Education | All instructor</title>
            </Helmet>
      <div className="flex justify-center mt-20 mb-10 bg-opacity-60 bg-lime-700">
        <Title title={"All Instructors  "}></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {users.map((instructor) => (
          <Instructor key={instructor._id} item={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
