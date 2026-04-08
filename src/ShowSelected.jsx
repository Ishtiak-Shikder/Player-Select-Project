import React from 'react'

function ShowSelected({selectedPlayer,removeSelectedPlayer}) {
    
  return (
    <div className='border shadow-lg  mx-auto mt-12 p-6  grid grid-cols-1 md:grid-cols-3 gap-5'>
    {selectedPlayer.length === 0 ? (<p className='bg-black text-center font-bold  p-2 text-white text-3xl'>NO PLAYERS ADDED HERE</p>)
    :
    (
        selectedPlayer.map((player)=>
        <div className='bg-gray-500 border flex justify-between p-4 items-center mt-2 rounded-xl shadow'>

                <div className='flex items-center gap-4'>
                   <img className=' w-[80px] h-[80px] rounded-full' src={player.image} alt="" />
                   <div>

             <p className='text-xl font-bold'>{player.name}</p>
                <p>{player.country}</p>
                   </div>
               
                </div>
              
            
            <div>
                <button className='bg-red-500 p-2 text-white rounded-lg' onClick={()=>removeSelectedPlayer(player)}>Remove</button>
            </div>
        </div>
        )
    )
    
    
    }
    </div>
  )
}

export default ShowSelected
