import { useState } from "react";
function List(){
    const [ Items] = useState(['javascript',' React','Tailwind','Nodejs','ExpressJs',' MongoDb'])
    return (
        <ul>
            {Items.map((item,ind)=><li key={ind}>{item}</li>)}
        </ul>
    )
}
export default List