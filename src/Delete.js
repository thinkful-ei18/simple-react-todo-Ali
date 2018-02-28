import React from 'react';

export default function Delete(props) {

  return (
    <button onClick={() => props.delete()}>Delete</button>
  )
}