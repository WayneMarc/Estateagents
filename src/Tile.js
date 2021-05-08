import Appointment from "./Appointment.js";
import React, { useState } from 'react';
function Tile(props) {
  const [view, setView] = useState(true);
  if (view) {
    return (
      <div className='Tile'>
        <h1>
         {props.name} {props.area} {props.price} {props.type} {props.id}
        </h1>
        <img className='image' alt='' src={props.image} />
        <Appointment id ={props.id} />
 
        <button
          onClick={() => {
            setView(false);
          }}
        >
          Hide
        </button>
      </div>
    );
  }
  return(
    <button onClick={()=>{setView(true)}}>Show</button>
  )
}
export default Tile;
