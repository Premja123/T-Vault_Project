import React from "react";
// import './Head.css';
 import Newcreate from "../Body_part/New_create";
import Search from './search.png';
import Arrow from './arrow.png';
import Banner_img from './Banner_img.png';
import Folder from './folder-plus 1.png';
import File_img from './file_img.png';
// import CreateNewSafe from '../AddCreate.js/CreateNewSafe';
// import Dup from '../AddCreate.js/Dup';

function Safes(){
return (
<div className="safes">
    <div className="safes_left_container">
    <div className="container_1">
     <div className="all_safes">
        <div><p>All Safes <span>(0)</span></p></div>
        <div><img src={Arrow} alt="arrow"></img></div>
    
    </div>
    <div className="searching">
      <img src={Search} alt="search_button"/>
      <input type="search"placeholder="Search"></input>
    </div>
    </div>

  <Newcreate/>

  
    </div>

    <div className="safes_right_container">
      <div className="banner">
     <div className="total_card"> <div className="no_safe_card">No Safes Created yet 
      <div className="description">Create a Safe to see your secrets,
       folders and permissions here
       </div>
      </div> </div>
     
        <img src={Banner_img}alt="banner_img"></img>
        
      </div>
      <div className="nav_2">
        <div className="nav_left">
        <div className="for_focusing active"><p>Secrets</p></div>
        <div className="for_focus"><p>Permissions</p></div>
        </div>
        <div className="nav_right">
        <div className="for_focus"><p>Add Folder</p></div>
        <div><img src={Folder} alt="fold_img"/></div>
        </div>
      </div>

<div className="secrets_count">
  <p>0 Secrets</p>
</div>

    <div className="total_container">
    <div className="file_document">
      <img src={File_img} alt="file_img"></img>
    </div>
    
    <div><p className="caption"> Add a 
    <span className="highlight"> Folder</span> 
    and then you’ll be able to 
    </p>
    <p className="caption">
    add <span className="highlight"> Secrets </span>
    to view them all here </p>
    </div>

    <div className="add_button">
    <button className="button" disabled="">+ Add</button>
    </div>
    
    </div>
    


    </div>

</div>
);
}
export default Safes;