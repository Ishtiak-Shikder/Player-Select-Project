import React from 'react'
import { FaRegAddressCard } from "react-icons/fa6";
import { IoFlag } from "react-icons/io5";



const Player = ({player,choosePlayer})=> {
     const {name,image,country,role,price,batting_hand,bowling_hand} = player;
  return (
    <div>
   <div className="card w-96 shadow">
  <figure>
    <img
      src={image} className='w-full mx-auto'
      alt="Shoes" />
  </figure>
  <div className="card-body border p-4">
    <h2 className="card-title font-bold text-xl"><FaRegAddressCard  className='text-2xl'/>{name}</h2>
    <div className='flex justify-between py-'>
        
        <p className='text-lg text-gray-600 font-'><IoFlag className='inline text-slate-500 text-2xl pr-1' />{country}</p>

        <button className='bg-slate-200 text-black font-semibold text-[16px] rounded px-4 py-2'>{role}</button>
    </div>
      <hr className='text-black' />
    <div className='flex justify-between '>
       <h4 className='font-bold text-lg'>Batting</h4>
       <h4 className='font-bold text-lg'>Bowling</h4>
    </div>
   
    <div className='flex justify-between '>
       <h4 className='text-lg  font-bold '>{batting_hand}</h4>
       <h4 className=' text-gray-900  text-[16px]'>{bowling_hand}</h4>
       
    </div>
    <div className='flex justify-between items-center'>
   <p className='text-lg font-bold text-black-500'>Price :{price}</p>
 <div className="card-actions">
      <button className="btn btn-active hover:bg-yellow-400 font-bold shadow rounded-lg p-2 border" onClick={()=>choosePlayer(player)}>Choose Player</button>
    </div>
    </div>
    
   
  </div>
</div>
    </div>
  )
}

export default Player



