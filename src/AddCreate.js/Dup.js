import React from 'react'
import CreateNewSafe from './CreateNewSafe';
import {useState} from 'react';
import Listingall from './Listingall';
import '../AddCreate.js/createform.css';

const Dup=()=> {
    const [input,setInput]=useState("");
const[list,setList]=useState([]);
const[editList,setEditList]=useState(null);

  return (
    <div>
    <div>
      <CreateNewSafe
      input={input}
      setInput={setInput}
      list={list}
      setList={setList}
      editList={editList}
      setEditList={setEditList}
      
      />
    </div>
    <div>
        <Listingall list={list}
         setList={setList}
         setEditList={setEditList}
         setInput={setInput}
         />
    </div>
    </div>
  );
}

export default Dup;