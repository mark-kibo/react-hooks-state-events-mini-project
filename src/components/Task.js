import React from "react";

function Task({category, text, changeTask}) {
 function update(){
  changeTask(text)
 }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={update}>X</button>
    </div>
  );
}

export default Task;
