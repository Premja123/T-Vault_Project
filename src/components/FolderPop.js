import React from 'react'
import '../components/createform.css';

import Delete from './delete-xxl.png';
import IconFolder from './icon_folder.png';


 const FolderPop=({list, setList})=> {
    //listfolder,setListfolder

    // const handleEdit=({id})=>{
    //     const  findList=list.find((listing)=>listing.id===id);
    //     setEditList(findList);
    // };
    
    const handleDelete=id=>{
        const removeArr=[...list].filter(listing=>listing.id !==id);
        setList(removeArr);
    };

  return (
    <div>
      {/* {
        listfolder.map((listfoldering)=>{
<li className='list_folder' key={listfoldering.id}>
    <input type="text" value={listfoldering.title} className="lidt_fol" 
    onChange={(event)=>event.preventDefault()}/>

</li>
        })
      } */}

{
        list.map((listing)=>(
          
            <li className='add_list_folder' key={listing.id}>
              <div className='card_list_folder'>
             <div className="icon_flex">
             <div className='folder_icon_top'><img src={IconFolder} alt="iconfolder"/></div>
               <div> <textarea value={listing.title} className="list_1_folder" 
               onChange={(event)=>event.preventDefault()}></textarea>
               </div></div>
               <div >
               {/* <img src={Edit}  className='edit_complete task_button' onClick={()=>handleEdit(listing)} alt="edit"/> */}
                <img src={Delete} className='delete_complete_button task_button_folder' onClick={()=>handleDelete(listing.id)} alt="delete"/>
               </div>
               </div> 
            </li>
        ))
      }

    </div>
  )
}
export default FolderPop;