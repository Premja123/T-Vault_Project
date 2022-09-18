import React,{useState} from 'react';
import Iconsafe from './icon_image.png';
import '../components/createform.css';

import Popup from 'reactjs-popup'

import Circle from "../components/circle.png";
import {useEffect} from 'react';
import {v4 as uuidV4} from "uuid";
//import Dup from './Dup';
// import System from "../components/System.png";
//import Dummy from './Dummy';

const Demo=({input,setInput,list,setList,editList,setEditList}) =>{
  //addProductProp
//{input,setInput,list,setList,editList,setEditList,closeModal}

const [inputowner,setInputowner]=useState('');

function owner(){
    setInputowner(inputowner);
}



const onInputChange=(event)=>{
    setInput(event.target.value);
};

const updateList=(title,id,completed)=>{
    const newList=list.map((listing)=>
        listing.id!==id ? {title,id,completed} : listing
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

const onFormSubmit=(event)=>{
    event.preventDefault();
       
    if(!editList){
        setList([...list,{id:uuidV4(),title:input, completed:false}]);
        setInput("");
    }else{
         updateList(input,editList.id,editList.completed)
    }
   
};

// const onFormSubmit=(event)=>{
//   event.preventDefault();
//   setList([...list,{id:uuidV4(),title:input, completed:false}]);
//   setInput("");
// };


// function Hello(){
//   alert("hii");
// }



// const [name,setName]=useState('');
// const[owner,setOwner]=useState('');
// const[description,setDescription]=useState('');

// const addForm=_=>{addProductProp({
//   id:(new Date).getTime(),
//   name,owner,description
// })
// setName('');
// setOwner('');
// setDescription('');
// }

  return (
<div>
   
{/* onSubmit={onFormSubmit} */}
    <form>
      {/* onSubmit={onFormSubmit} */}
    {/* <img src={Circle} alt="circle"></img> */}
  <Popup trigger={<img src={Circle}  className="add_button_1" alt="circle"></img>}>
   {close=>(
    <form onSubmit={onFormSubmit} >
    <div className="newsafe_container" >
    <div className="model_container">

        <h2>Create Safe</h2>
        <div className="iconsafe">
        <div>
        <img  className="create_page_logo" src={Iconsafe} alt="iconsafe"/>
        </div>
        <div className="safe_paragraph"> A Safe is a logical unit to store the secrets.
         All the safes are created within Vault. 
         You can control access only at the safe level. 
         As a vault administrator you can manage safes but 
         cannot view the content of the safe.</div>
        </div> 
        <div>
        <p className="safe_name">Safe Name</p>
        <input className="name_input" name="safename" type="text" placeholder="Safe Name"  value={input} onChange={onInputChange} ></input>
        </div>
        {/* value={name}
        onChange={event=>{setName(event.target.value)}} */}
        {/* value={input} onChange={onInputChange} */}
        <p className="Owner_name">Owner</p>
        <input className="owner_input" name="owner" type="text" placeholder="Owner" onClick={()=>{owner();}} ></input>
        {/* value={owner}
        onChange={event=>{setOwner(event.target.value)}} */}
        <p className="type_of_block">Type</p>
        <select className="select_thing">
            <option>Personal</option>
            <option>Other</option>
        </select>
        <p className="description_area">Description</p>
        <textarea rows="3" cols="50" name="description" className="textarea_description" placeholder="Description"  ></textarea>
        {/* value={description}
        onChange={event=>{setDescription(event.target.value)}} */}
        <p className="condition">Please add a minimum of 10 characters</p>
        <div>
        <div className="buttons"> 
        <button type="button" className="cancel_button"  onClick={()=>{close();}}>Cancel</button>
        {/* onClick={()=>{close();}} */}

        { input.length <10 && 
        <button type="text" className="create_button">
        + Create
        </button>
        }
{
    input.length>=10 &&
    <button type="submit" className="create_button_rose">
    {editList ? "Update" : "+ Create"}
    </button>
}

        </div>
    </div>

  
    </div>
</div>
</form>
  )}
   </Popup> 

</form>

</div>
  );
}
export default Demo;


