import React from 'react';
import logo from '../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb";
import Coin from '../assets/coin.png'


const Header = ({coin}) => {
  return (
   <div className="navbar bg-base-100 shadow-sm flex justify-between items-center  mx-auto max-w-7xl py-4">
  <div className="">
    <img src={logo} alt="" />
  </div>
  <div className="flex gap-6">
    <a href="#" className='text-[19px] text-black' >Home</a>
    <a href="#" className='text-[19px] '>Fixture</a>
    <a href="#" className='text-[19px] '>Team</a>
    <a href="#" className='text-[19px] '>Schedule</a>
   <button class="btn btn-active" className='font-bold  flex gap-1'>{coin}  Coin   <img src={Coin}  className="w-6 rounded-full" alt="" /> </button>
  </div>
</div>

  )
};

export default Header;