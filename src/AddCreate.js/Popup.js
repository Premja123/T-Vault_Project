import React from 'react'
import {useState} from 'react';
import Demo from "../AddCreate.js/Demo";

export default function Popup() {
    
const[showModel,setShowModel]=useState(false);

  return (
    <div>
      <Demo/>
    </div>
  );
}
