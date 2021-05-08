// import Appointment from './Appointment.js'
// function Tile(props) {
//   return (
//     <div className="Tile">
//       <h1>{props.area} {props.type}</h1>
//       <h2>{props.price}</h2>
//       <img className='image' src ={props.image}></img>
//         <Appointment/>
//     </div>
//   );
// }

// export default Tile;

import Appointment from "./Appointment.js";
import React, { useState } from 'react';
function Tile(props) {
  const [view, setView] = useState(true);
  if (view) {
    return (
      <div className='Tile'>
        <h1>
          {props.area} {props.price} {props.type}
        </h1>
        <img className='image' alt='' src={props.image} />
        <Appointment />
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
