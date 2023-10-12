import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/PageTitle/Title";
import Instructor from "../../Shared/Inatructor/Instructor";

const Instructors = () => {
    const {  data: users=[] } = useQuery(['user'], async()=>{
        const res = await fetch('https://server-site-alpha.vercel.app/users?instructor=instructor')
        const result =res.json()
        return result
    })
    return (
        <div>
            <div className="mt-20 mb-10">

            <Title title='Instructors'></Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                {
                    users.slice(0,5).map(instructor => <Instructor
                    key={instructor._id}
                    item={instructor}
                    ></Instructor>)
                }
            </div>
            
        </div>
    );
};

export default Instructors;