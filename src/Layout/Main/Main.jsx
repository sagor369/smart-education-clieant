import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="relative ">
            <div className="sticky top-0 z-50">
            <Navbar></Navbar>
            </div>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;