import React from 'react';
import './Card.css';
import Delete from './Delete';

export default function Card(props){

      return (
        <div>
          <span>{props.title}</span>
          <Delete delete={() => props.delete(props.noteKey)} />
        </div>
      )
  
}