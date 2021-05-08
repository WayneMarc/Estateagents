// "use strict";
// const express = require("express");
// const path=require("path")

// const app = express();
// const PORT = 3001;
// let ticket = 0;
// const displayList = {};

// let houses=[]

// houses.push({price:27500,area:"Handsworth",type:"Flat",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/108k/107051/78903606/107051_RS0730_IMG_11_0000_max_476x317.jpeg`})
// houses.push({price:1450000,area:"Harbourne",type:"House",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/93k/92029/104484854/92029_581009_IMG_00_0000_max_476x317.jpeg`})
// houses.push({price:165000,area:"Edgbaston",type:"Maisonette",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/73k/72455/97846952/72455_107VC_IMG_00_0000_max_476x317.jpg`})


// //var bodyParser = require('body-parser')
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '')));

// app.get("/houses", (req, res) => {

//   res.type('application/json')
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.send(JSON.stringify( houses ));
// });


// app.post("/sms", (req, res) => {
//   res.type('application/json')
//   res.append('Access-Control-Allow-Origin', ['*']);

//   sendSMS()
//   res.send(JSON.stringify('ok'));
// });
// /*
// app.get("/present", (req, res) => {
//   const ticket = req.query.ticket;
//   delete displayList[ticket];
//   res.type('application/json')
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.status(200).send(JSON.stringify("OK")); //Nick added stringify 01/21
// });
// */
// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${PORT}`);
// });

// function sendSMS (msg,phoneNumber) {
//     // Prerequisite: install the request package e.g. npm install request

// const request = require('request');
// const apiKey = 'sgU1EBOeN88gQEiZr10vFTuVugiJww'; 
// const sendApiMessage = function(endpoint, messageArgs, callback) {
//     return request.post(
//         'https://www.firetext.co.uk/api/' + endpoint,
//         { form: messageArgs },
//         callback
//     );
// };

// var endpoint = 'sendsms';
// var urlArgs = {
//     'apiKey' : apiKey,
//     'to' : '447944928384',
//     'from' : 'Firetext',
//     'message' : msg
// };

// sendApiMessage(endpoint, urlArgs, function(error, response, body){
//     if (error) {
//         return console.log(error);
//     }
//     console.log(body);
// });
// }
"use strict";
const express = require("express");
const path= require("path")
const app = express();
const PORT = 3001;
const cors = require("cors")  //Allows 'Cross Origin Resource Sharing (requests from other domains)'
app.use(cors())
app.use(express.json());  //'modern way' - (replaces 'bodyParser')
let houses=[]
houses.push({price:27500,area:"Handsworth",type:"Flat",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/108k/107051/78903606/107051_RS0730_IMG_11_0000_max_476x317.jpeg`})
houses.push({price:1450000,area:"Harbourne",type:"House",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/93k/92029/104484854/92029_581009_IMG_00_0000_max_476x317.jpeg`})
houses.push({price:165000,area:"Edgbaston",type:"Maisonette",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/73k/72455/97846952/72455_107VC_IMG_00_0000_max_476x317.jpg`})
//app.use(express.static(path.join(__dirname, '')));
app.get("/houses", (req, res) => {  
  res.type('application/json') 
  res.send(JSON.stringify( houses ));
});
app.post("/sms", (req, res) => {
  sendSMS(req.body.msg, req.body.tel)
  res.type('application/json')
  res.send(JSON.stringify( "OK" ));
});
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
function sendSMS(msg,phoneNumber){
  // Prerequisite: install the request package e.g. npm install request
  const request = require('request');
  const apiKey = 'sgU1EBOeN88gQEiZr10vFTuVugiJww'; 
  const sendApiMessage = function(endpoint, messageArgs, callback) {
    return request.post(
        'https://www.firetext.co.uk/api/' + endpoint,
        { form: messageArgs },
        callback
    );
  };
  var endpoint = 'sendsms';
  var urlArgs = {
      'apiKey' : apiKey,
      'to' : phoneNumber,
      'from' : 'Houses App',
      'message' : msg
  };
  sendApiMessage(endpoint, urlArgs, function(error, response, body){
    if (error) {
        return console.log(error);
    }
    console.log(body);
  });
}