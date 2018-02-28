import React from 'react';
import './Input.css';

export default function Input(props) {

  let textVal;
  
  return (
  <form onSubmit={(e) => {
    e.preventDefault();
    props.addNote(textVal);
  }}>
     <input type="text"  onChange={(e) => textVal = e.target.value } />
     <input type="submit"  value="Submit"/>   
  </form> 
  )
}