




// import React from "react";
// import Iconsafe from './icon_image.png';
// import './createform.css';
// import {useState} from 'react';
// import {nanoid} from 'nanoid';


// function Createbox({open,onClose}){


//     function submitform(){

//     }

//     const [len,setLen]=useState('');
//     const [len2,setLen2]=useState('');
//     const [len3,setLen3]=useState('');

//     const [addFormdata,setAddFormdata]=useState({
//         safename:'',
//         owner:'',
//         description:''
//     })
     
//     const handleAddFormChange=(event)=>{
//         event.preventDefault();
//         const fieldname=event.target.getAttribute('name');
//         const fieldvalue=event.target.value;
//         const newFormData={...addFormdata};
//         newFormData[fieldname]=fieldvalue;
//         setAddFormdata(newFormData);
//         setLen(event.target.value)
//     };

//     const handleAddFormSubmit=(event)=>{
//         event.preventDefault();
//         const newContact={
//             id:nanoid(),
//             safename:addFormdata.safename,
//             owner:addFormdata.owner,
//             description:addFormdata.description
//         };

  
//      };

 
//     function getData_2(val){
//         setLen2(val.target.value)
//     }
//     function getData_3(val){
//         setLen3(val.target.value)
//     }

//     if(!open) {return null};
//     return(
// <div className="newsafe_container">
//     <div className="model_container">
//     <form>
//         <h2>Create Safe</h2>
//         <div className="iconsafe">
//         <div>
//         <img  className="create_page_logo" src={Iconsafe} alt="iconsafe"/>
//         </div>
//         <div className="safe_paragraph"> A Safe is a logical unit to store the secrets.
//          All the safes are created within Vault. 
//          You can control access only at the safe level. 
//          As a vault administrator you can manage safes but 
//          cannot view the content of the safe.</div>
//         </div> 
//         <p className="safe_name">Safe Name</p>
//         <input className="name_input" name="safename" type="text" placeholder="Safe Name"  onChange={handleAddFormChange} ></input>
//         <p className="Owner_name">Owner</p>
//         <input className="owner_input" name="owner" type="text" placeholder="Owner" onChange={getData_2} ></input>
//         <p className="type_of_block">Type</p>
//         <select className="select_thing">
//             <option>Personal</option>
//             <option>Other</option>
//         </select>
//         <p className="description_area">Description</p>
//         <textarea rows="3" cols="50" name="description" className="textarea_description" placeholder="Description" onChange={getData_3}></textarea>
//         <p className="condition">Please add a minimum of 10 characters</p>
//         <div>
//        <div className="buttons"> 
//         <button onClick={onClose} className="cancel_button">Cancel</button>
    
//        {
//            (len.length<10 || len2.length<10 || len3.length<10) &&
//            <button  className="create_before">+ Create</button>
        
//         } 
//         {
//              (len.length>10 && len2.length>10 && len3.length>10) &&
//         <button type="submit" onSubmit={handleAddFormSubmit} onClick={submitform} className="create_button">+ Create</button>
//         }
//         </div>
//     </div>
//         </form>
//         </div>
// </div>
//     );
// }

// export default Createbox;