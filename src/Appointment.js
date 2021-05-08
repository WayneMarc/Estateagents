// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import React, { useState } from "react";
// // import Modal from 'react-modal';
// import ReactDOM from 'react-dom';

// // const customStyles = {
// //     content : {
// //       top                   : '50%',
// //       left                  : '50%',
// //       right                 : 'auto',
// //       bottom                : 'auto',
// //       marginRight           : '-50%',
// //       transform             : 'translate(-50%, -50%)'
// //     }
// //   };
  
// //   // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// //   Modal.setAppElement('App')
  
// //   function App(){
// //     var subtitle;
// //     const [modalIsOpen,setIsOpen] = React.useState(false);
// //     function openModal() {
// //       setIsOpen(true);
// //     }
  
// //     function afterOpenModal() {
// //       // references are now sync'd and can be accessed.
// //       subtitle.style.color = '#f00';
// //     }
  
// //     function closeModal(){
// //       setIsOpen(false);
// //     }
  
// //       return (
// //         <div>
// //           <button onClick={openModal}>Open Modal</button>
// //           <Modal
// //             isOpen={modalIsOpen}
// //             onAfterOpen={afterOpenModal}
// //             onRequestClose={closeModal}
// //             style={customStyles}
// //             contentLabel="Example Modal"
// //           >
  
// //             <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
// //             <button onClick={closeModal}>close</button>
// //             <div>I am a modal</div>
// //             <form>
// //               <input />
// //               <button>tab navigation</button>
// //               <button>stays</button>
// //               <button>inside</button>
// //               <button>the modal</button>
// //             </form>
// //           </Modal>
// //         </div>
// //       );
// //   }
  
// //   ReactDOM.render(<App />, App);
// function Appointment(props) {
//     const [startDate, setStartDate] = useState(new Date());
//     const [isOpen, setFormOpen] = useState(false);
//     const [isBooked, setIsBooked] = useState(false);
//     if (isOpen){
//         return (
//             <div>
//                 <label>Preferred date:</label><DatePicker selected={startDate} onChange={date => setStartDate(date)} /><br/>
//                 <label>Preferred time:</label><input id='time' type='text'></input><br/>
//                 <label>Contact email:</label><input id='email' type='text'></input><br/>
//                 <label>Contact phone:</label><input id='tel' type='text'></input><br/>
//                 <label>Notes/comments:</label><br/><textarea rows="5" cols="40"></textarea><br/>
//                 <button onClick={()=>{setFormOpen(false);setIsBooked(true);}}>Submit</button>
//             </div>
//         );
//     }   
//     return(
//         <button onClick={()=>setFormOpen(true)}>{isBooked?"Booked":"Request viewing"}</button>
//     )
// }
// export default Appointment;
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

function Appointment(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsFormOpen] = useState(false);
    const [isBooked, setIsBooked] = useState({booked:false,});
    const sendSMS = () => {
        async function doSMS() {
            let payload={msg:document.getElementById("msg").value,tel:document.getElementById("tel").value}
            console.log (payload)
            let response = await fetch("http://localhost:3001/sms", {
                method: "POST", body: JSON.stringify(payload), headers: {
                     'Accept': 'application/json', 'Content-Type': 'application/json' 
                }                
            })
            let result = await response.json()
        }
        doSMS()
    }
    if (isOpen) {
        return (
            <div>
                <label>Preferred date:</label><DatePicker selected={startDate} onChange={date => setStartDate(date)} /><br />
                <label>Preferred time:</label><input id='time' type='text'></input><br />
                <label>Contact email:</label><input id='email' type='text'></input><br />
                <label>Contact phone:</label><input id='tel' type='text'></input><br />
                <label>Notes/comments:</label><br /><textarea id='msg' rows="5" cols="40"></textarea><br />
                <button onClick={() => { 
                  setIsFormOpen(false); 
                  setIsBooked(true); 
                  sendSMS()}}>Submit</button>
            </div>
        );
    }
    return (
        <button onClick={() => setIsFormOpen(true)}>{isBooked ? "Booked" : "Request viewing"}</button>
    )
}
export default Appointment;