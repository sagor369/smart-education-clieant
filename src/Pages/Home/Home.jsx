import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Class from "./Class";
import Instructors from "./Instructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Smart Education | Home</title>
            </Helmet>
            <Banner></Banner>
            <Class></Class>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;