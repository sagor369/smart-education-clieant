import { useQuery } from "@tanstack/react-query";
import Items from "../../Shared/Items/Items";
import Title from "../../Shared/PageTitle/Title";
import { Helmet } from "react-helmet-async";

const AllClass = () => {
  const { data: classes = [] } = useQuery(["class"], async () => {
    const res = await fetch("https://server-site-alpha.vercel.app/all-class");
    // const res = await fetch("http://localhost:5000/all-class");
    const result = res.json();
    return result;
  });
  console.log(classes)
  return (
    <div>
      <Helmet>
                <title>Smart Education | All class</title>
            </Helmet>
      <div className="flex justify-center mt-20 bg-opacity-60 bg-lime-700">
        <Title title={"All Classes "}></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((data) => (
          <Items key={data._id} item={data}></Items>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
