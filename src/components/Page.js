import React from 'react'
import {useState} from 'react';
import CreateNewSafe from './CreateNewSafe';

export default function Page() {
const [products,setProducts]=useState([]);
const addForm=product=>{
    setProducts([...products,product])
    alert("hiii")
}

  return (
    <div>
      <CreateNewSafe addProductProp={addForm}/>
    </div>
  )
}
