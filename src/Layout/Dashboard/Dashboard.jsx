import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";
import Footer from "../../Shared/Footer/Footer";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
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
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu acctivate p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <MenuBar></MenuBar>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
