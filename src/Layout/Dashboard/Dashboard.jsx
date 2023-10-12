import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";
import Footer from "../../Shared/Footer/Footer";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: manegUser = {}, isLoading } = useQuery(["manegUser", user?.email], async () => {
    const res = await axiosSecure.get(`/user-data/${user?.email}`);
    const result = res.data
    return result
    
  }

  );
 
  return (
    <div>
      <Helmet>
        <title>Smart Education | Dashboard</title>
      </Helmet>

      <Navbar></Navbar>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            {manegUser?.admin &&
            <p>Admin Home</p>
             }
            {manegUser?.instructor &&
            <p>Instructor Home</p>
             }
            {manegUser?.student &&
            <p>Student Home</p>
             }
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu acctivate p-4 w-80 h-full bg-base-200 text-base-content">
            <MenuBar data={manegUser}></MenuBar>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
