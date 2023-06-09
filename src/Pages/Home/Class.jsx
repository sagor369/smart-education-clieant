import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/PageTitle/Title";
import Items from "../../Shared/Items/Items";

const Class = () => {
    const {  data: classes=[] } = useQuery(['class'], async()=>{
        const res = await fetch('http://localhost:5000/populer')
        const result =res.json()
        return result
    })
    return (
        <div>
            <Title title='Populer Classes '></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.map(data => <Items
                    key={data._id}
                    item={data}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default Class;