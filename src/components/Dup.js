import React from 'react'
//import Systemblock from './Systemblock';
import {useState} from 'react';
import Listingall from './Listingall';
import '../components/createform.css';
import CreateNewSafe from './CreateNewSafe';


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
    <div className="displayed_items">
     
        <Listingall 
        list={list}
         setList={setList}
         setEditList={setEditList}
         setInput={setInput}
         />
    </div>
    </div>
  );
}

export default Dup;