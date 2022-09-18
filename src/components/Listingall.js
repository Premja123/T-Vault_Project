import React from 'react'
import '../components/createform.css';
import Icon from './icon_image.png';
import Delete from './delete-xxl.png';
import Edit from './edit-xxl.png';

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
          
//           <li className='add_list' key={listing.id}>
//             <div className='card_list'>
//               <img src={Icon} alt="icon_img"></img>
//                 <textarea value={listing.title} className="list_1" 
//                onChange={(event)=>event.preventDefault()}/>
//                             <img src={Edit}  className='edit_complete task_button' onClick={()=>handleEdit(listing)} alt="edit"/>
// <img src={Delete} className='delete_complete task_button' onClick={()=>handleDelete(listing.id)} alt="delete"/> 

//                </div> 
//                </li>



<li className='add_list' key={listing.id}>
              <div className='card_list'>
             <div className="icon_flex">
             <div className='folder_icon_top'><img src={Icon} className="icon_con_2" alt="icon_img"></img>
               <div> <textarea value={listing.title} className="list_1" 
               onChange={(event)=>event.preventDefault()}></textarea>
               </div></div>
               <div>
               <img src={Edit}  className='edit_complete task_button' onClick={()=>handleEdit(listing)} alt="edit"/>
                <img src={Delete} className='delete_complete task_button' onClick={()=>handleDelete(listing.id)} alt="delete"/>
               </div>
               </div> 
               </div>
            </li>
              
  
          
        ))
      }
    </div>
  );
};
export default Listingall;
{/* <img src={Edit}  className='edit_complete task_button' onClick={()=>handleEdit(listing)} alt="edit"/>
<img src={Delete} className='delete_complete task_button' onClick={()=>handleDelete(listing.id)} alt="delete"/> */}