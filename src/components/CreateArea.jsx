import React, { useState } from "react";


function CreateArea(props) {
  const [note, setNote] = useState({
    "title":"",
    "content": ""
  });
function handleChange(e){
  const {name, value} = e.target;

  setNote(prevNote =>{
    return{ ...prevNote,
            [name]: value}
  });
}
function handleAdd(e){
  props.onAdd(note);
  e.preventDefault();
  setNote({
     "title":"",
    "content": ""}
  )
}
  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="title" onChange={handleChange}/>
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
