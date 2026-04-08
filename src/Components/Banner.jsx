import React from 'react';
import bg from "../assets/bg-shadow.png"
import banner from "../assets/banner-main.png"

const Banner =({addCoin}) => {
    return (
        <div className="max-w-7xl mx-auto">
           <div className='rounded-xl bg-black text-center py-10' style={{ 
           backgroundImage:{bg},
           padding:'30px 10px',
                          
                         }}>

             <img src={banner} className='mx-auto w-[250px] ' alt="" />
             <h2 className='text-white font-bold text-4xl py-6'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
             <p className='text-gray-400 text-2xl'>Beyond Boundaries Beyond Limits</p>
             <button onClick={()=>{addCoin()}}  className='bg-yellow-500 text-black p-2 rounded-lg text-sm font-bold border mt-4'>Claim Free Credits</button>
           </div>
        </div>
    );
};

export default Banner;