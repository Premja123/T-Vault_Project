import React from 'react'
import CreateFolderPop from './CreateFolderPop';
import FolderPop from './FolderPop';
import { useState } from 'react';
import '../components/createform.css';
import TopFolder from './TopFolder';

const FolderListing=()=> {
    // const[input,setInput]=useState("");
    // const[listfolder,setListfolder]=useState([]);
    const [input,setInput]=useState("");
    const[list,setList]=useState([]);
    const[editList,setEditList]=useState(null);
    
  return (
    <div>
    <div>
      {/* <CreateFolderPop
      input={input}
     setInput={setInput}
     listfolder={listfolder}
     setListfolder={setListfolder}
      /> */}

<CreateFolderPop
      input={input}
      setInput={setInput}
      list={list}
      setList={setList}
      editList={editList}
      setEditList={setEditList}
      
      />
    </div>
    <div>
        {/* <FolderPop listfolder={listfolder}
        setListfolder={setListfolder}
        /> */}
    </div>
  <div>
  <TopFolder
      input={input}
      setInput={setInput}
      list={list}
      setList={setList}
      editList={editList}
      setEditList={setEditList}
      
      />
  </div>
  
    <div className="displayed_items_folder">
     
        <FolderPop
        list={list}
         setList={setList}
         setEditList={setEditList}
         setInput={setInput}
         />
    </div>

    </div>
  );
}
export default FolderListing;