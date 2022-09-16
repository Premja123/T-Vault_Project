import React from 'react'
import '../AddCreate.js/createform.css';


const Listingall=({list, setList,setEditList})=> {
// const handleDelete=({id})=>{
//     setList(list.filter((listing)=>listing.id !==id));
// };

const handleEdit=({id})=>{
    const  findList=list.find((listing)=>listing.id===id);
    setEditList(findList);
};

const handleDelete=id=>{
    const removeArr=[...list].filter(listing=>listing.id !==id);
    setList(removeArr);
};

  return (
    <div>
      {
        list.map((listing)=>(
            <li className='add_list' key={listing.id}>
                <input type="text" value={listing.title} className="list_1" 
               onChange={(event)=>event.preventDefault()}/>

               <div>
                
                <button className='edit_complete task_button' onClick={()=>handleEdit(listing)}>Edit</button>
                <button className='delete_complete task_button' onClick={()=>handleDelete(listing.id)}>Delete</button>
               </div>

            </li>
        ))
      }
    </div>
  );
};
export default Listingall;