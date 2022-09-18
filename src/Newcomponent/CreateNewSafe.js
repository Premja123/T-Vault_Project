import React from 'react';
import Iconsafe from './icon_image.png';
import './createform.css';
import Popup from 'reactjs-popup';
import Circle from "./circle.png";

const Demo=() =>{
    
    return (
  <div>
      <form>
     <Popup trigger={<img src={Circle} alt="circle"></img>} position="top center" modal >
   {close=>(
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
        <input className="name_input" name="safename" type="text" placeholder="Safe Name"  ></input>
        </div>
        <p className="Owner_name">Owner</p>
        <input className="owner_input" name="owner" type="text" placeholder="Owner" ></input>
        <p className="type_of_block">Type</p>
        <select className="select_thing">
            <option>Personal</option>
            <option>Other</option>
        </select>
        <p className="description_area">Description</p>
        <textarea rows="3" cols="50" name="description" className="textarea_description" placeholder="Description"  ></textarea>
        <p className="condition">Please add a minimum of 10 characters</p>
        <div>
        <div className="buttons"> 
        <button type="button" className="cancel_button"  onClick={()=>{close();}}>Cancel</button>
        <button type="submit" className="create_button"> + Create</button>
        </div>
    </div>

  
    </div>
</div>
  )}
   </Popup> 

</form>

</div>
  );
}