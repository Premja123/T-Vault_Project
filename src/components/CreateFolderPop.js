import React from 'react'
import Popupfirst from 'reactjs-popup';
import './createform.css';
import Add from './add.png';
 import {useEffect} from 'react';
import {v4 as uuidV4} from "uuid";

const CreateFolderPop=({input,setInput,list,setList,editList,setEditList}) =>{

  //input,setInput,listfolder,setListfolder

// const onInputChange=(event)=>{
//   setInput(event.target.value);
// };


// const onFormSubmit=(event)=>{
//   event.preventDefault();
//   setListfolder([...listfolder,{id:uuidV4(),title:input,completed:false}]);
//   setInput("");
// };


const onInputChange=(event)=>{
  setInput(event.target.value);
};

const onFormSubmit=(event)=>{
  event.preventDefault();
     
  if(!editList){
      setList([...list,{id:uuidV4(),title:input, completed:false}]);
      setInput("");
  }else{
       updateList(input,editList.id,editList.completed)
  }
 
};


const updateList=(title,id,completed)=>{
  const newList=list.map((listing)=>
      listing.id!==id ? {title,id,completed} : list
  );
  setList(newList);
 setEditList("");
};

useEffect(()=>{
  if(editList){
      setInput(editList.title);
  }else{
      setInput("");
  }
},[setInput, editList]);


  return (
    <div>
      <form>
      <Popupfirst trigger={<img src={Add} className="add_button_bottom" alt="add"/>} >
       {closing=>(
            <form onSubmit={onFormSubmit}>
              <div>
                <div className='folder_pop'>
        <div className='add_folder'>
            <h2>Add Folder</h2>
        </div>
        <div className='folder_name'>
            <p>Folder Name</p>
            <input className="folder_name_text" type="text" placeholder='Folder Name' value={input} onChange={onInputChange} required></input>
        </div>

        <div className='folder_para'>
            <p>Please enter lowercase alphabets, numbers and underscores only.</p>
        </div>
<div className='folder_button'>
    <button className='cancel' onClick={()=>{closing();}}>Cancel</button>
{
  input.length <10 &&
    <button type="submit" className='save_before'>Save</button>
}

{
  input.length >=10 &&
    <button type="submit" className='save_after'>Save</button>
}

</div>
</div>
</div>
</form>
       )}
</Popupfirst>

      </form>
    </div>
  )
};
export default CreateFolderPop;