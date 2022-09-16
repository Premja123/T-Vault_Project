// import React from 'react'

// export default function New_create() {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
// }


// import React from "react";
import Uparrow from '../Body_part/uparrow.png';
import Circle from '../Body_part/circle.png';
import System from '../Body_part/System.png';
import One_finger from '../Body_part/one-finger-xxl.png';
import {useState} from 'react';
import Dup from '../AddCreate.js/Dup';
// import CreateNewSafe from '../AddCreate.js/CreateNewSafe';



function Welcome(){
//     const[popup,setPopup]=useState(true);
// const handleClickOpen=()=>{
// setPopup(!popup);
// };
const [openmodal,setOpenmodal]=useState(false);

return(
    <div>

{openmodal &&<Dup closeModal={setOpenmodal}/>}
        {/* <SafeUpdate/> */}
        {/* {popup?<Dup/>:""} */}
<div className="container_second">

<img src={System} alt="system_logo"></img>
</div>

<div className="create_para">
    Create a Safe to get Started
</div>
<div className="add_content">
    <div>

    </div>
    <div className="foot_part">
        
        {/* <div className="circle" onClick={()=>setOpenModal(true)}><img src={Circle} alt="circle"></img> 
        <Demo open={openModal} onClose={()=>setOpenModal(false)}/> */}

        {/* <div className="circle"onClick={()=>setShowModel(true)} ><img src={Circle} alt="circle"></img> 
        <div className="red_circle"><div className="one_finger"><img src={One_finger} alt="one_finger"></img></div>
        </div>
        </div>
        {showModel &&( <Dup
        close={setShowModel}
        />)} */}

{/* onClick={handleClickOpen} */}
<div className="circle" onClick={()=>{setOpenmodal(true);}} >
    <img src={Circle} alt="circle"></img> 
        <div className="red_circle"><div className="one_finger"><img src={One_finger} alt="one_finger"></img></div>
</div>
</div>

        <div className="uparrow"><img src={Uparrow} alt="uparrow"/></div>
        <div className="add_box"><p>Create New Safe</p></div>
    </div>
</div>
</div>
);
}

export default Welcome;