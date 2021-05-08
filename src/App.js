import './App.css';
import Tile from './Tile.js';
import React, { useEffect, useState } from "react";
function App() {
  //let houses=[]
  // houses.push({price:27500,area:"Handsworth",type:"Flat",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/108k/107051/78903606/107051_RS0730_IMG_11_0000_max_476x317.jpeg`})
  // houses.push({price:1450000,area:"Harbourne",type:"House",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/93k/92029/104484854/92029_581009_IMG_00_0000_max_476x317.jpeg`})
  // houses.push({price:165000,area:"Edgbaston",type:"Maisonette",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/73k/72455/97846952/72455_107VC_IMG_00_0000_max_476x317.jpg`})
  let server='http://localhost:3001'
  const [houses, fillHouses] = useState([])
  useEffect(()=>{
    async function fetchHouses(){        
        let response = await fetch(server + "/houses")      
        fillHouses( await response.json()) 
  //      loaded(true) //invoking the 'loaded' 'setter' function will trigger a refresh of the component        
    }
    fetchHouses()
  }    
   ,[])
  return (
    <div className='hero'>
    <img className='Picture'src={`https://www.boxbrownie.com/img/blog/thumbnail172.jpg`}/> 
    <div className="App">
      {houses.map(
        h =>
        <Tile email={h.email} tel={h.tel} price={h.price} area={h.area} image={h.image} type={h.type} key={h.id} id={h.id}/>
        )
      }
    </div>
    </div>
  );
}
export default App;