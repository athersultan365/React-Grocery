import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ list, editbtn, removeItem})=> {
return (
<div className="mt-4 w-full">
    {list.length > 0 ? (
        list.map((item) =>(
            <div key={item.id} className="flex justify-between items-center mb-2 bg-white p-2 rounded-md">
                <p className="m-0">{item.title}</p>
                <div>
                    <button onClick={() => editbtn(item.id)} className="mr-2 text-blue-500" ><FaEdit/></button>
                    <button onClick={() => removeItem(item.id)} className="text-red-500" ><FaTrash/></button>
                </div>
            </div>
         ))
     ):(
<p className=" text-white text-center">No Item in the list </p>
)}
</div>
)
}
export default List;