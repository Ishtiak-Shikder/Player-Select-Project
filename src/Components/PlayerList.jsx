import React, { useEffect, useState } from 'react'
import Player from './player'
import ShowSelected from '../ShowSelected'

const PlayerList = ({choosePlayer,selectedPlayer,showSelected,setShowSelected,removeSelectedPlayer})=> {
  const [players,setPlayers] = useState([])
useEffect(()=>{
fetch('players.json')
  .then(res=>res.json())
  .then(data=>setPlayers(data))
},[])
 
  return (
    <div>
     <section className='max-w-7xl mx-auto my-8'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Available Players</h1>
        </div>
        <div className=''>
          <button className={`font-bold ${!showSelected ? 'bg-yellow-400' : ""}  rounded-lg p-2 `} onClick={()=>setShowSelected(false)}>Available</button>
          <button className={`font-bold rounded p-2 ${showSelected ? 'bg-yellow-400': ""} `} onClick={()=>setShowSelected(true)}>Selected ({selectedPlayer.length})</button>
      
        </div>
      </div>

     { showSelected ?
      //   (selectedPlayer.map((p)=>(
      //       <div className='w-4/5 bg-blue-300 h-[300px] mx-auto flex justify-between '>
      //          <div>
      //           <img src={p.image} alt="" />
      //           <p>{p.name}</p>
      //          </div>
      //          <button className='btn btn-warning'>remove</button>
      //       </div>
      //  )))

       (<ShowSelected removeSelectedPlayer={removeSelectedPlayer} selectedPlayer={selectedPlayer}/>):
       

     ( <div className='grid grid-cols-1 md:grid-cols-3 gap-5  mt-7'>
  

            {
                 
      players.map(player=><Player key={player.id} player={player} choosePlayer={choosePlayer}/>)
     
            }  
          
      </div>)}
     </section>
    </div>
  )
}
export default PlayerList