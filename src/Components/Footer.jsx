import React from 'react'
import bg from '../assets/bg-shadow.png'

function Footer() {
  return (
    <>
   <footer className="footer sm:footer-horizontal bg-[#111828]  p-10 mt-56 relative ">
    
        <div className='w-4/5 mx-auto text-center items-center shadow-2xl bg-white bg-cover h-[300px] my-auto absolute right-36 -top-32 rounded-lg' style={{
            background:{bg}
        }}>
<h1 className='text-2xl font-bold pt-16 mx-auto'>Subscribe to our Newsletter</h1>
<p className='text-xl font-semibold mx-auto' >Get the latest updates and news right in your inbox!</p>
<fieldset className=" mx-auto ">
      <div className="join">
        <input 
          type="text"
          placeholder="username@site.com"
          className="input border-gray-500 px-3 outline-none" />
        <button className="btn btn-primary join-item bg-gradient-to-r from-yellow-500 to-pink-500 px-4 py-2 font-bold ">Subscribe</button>
      </div>
    </fieldset>

        </div>
        <div className='max-w-7xl mx-auto pt-60 '>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

     <nav>
    <h6 className="footer-title text-[#fff] text-lg font-semibold">About Us</h6>
    <p className='text-gray-600 font-semibold text-lg'>We are a passionate team dedicated to providing the best services to our customers.</p>
  </nav>
  <nav>
    <h6 className="footer-title text-lg font-semibold  text-[#fff]">Quick Links</h6>
    <div className='grid space-y-2'>
<a className="link link-hover text-lg text-gray-500 ">Home</a>
    <a className="link link-hover text-lg text-gray-500 ">Services</a>
    <a className="link link-hover text-lg text-gray-500 ">About</a>
    <a className="link link-hover text-lg text-gray-500 ">Contact</a>
    </div>
    
  </nav>
  <nav>
    <h6 className="footer-title text-lg font-semibold  text-[#fff]">Subscribe</h6>
     <a className="link link-hover text-gray-500 text-sm">Subscribe to our newsletter for the latest updates.</a>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item pl-2" />
        <button className="btn btn-primary join-item bg-gradient-to-r from-yellow-500 to-pink-500 px-4 py-2 font-bold outline-none">Subscribe</button>
      </div>
    </fieldset>
  </nav>
  <form>   
  </form>
   </div>  
  </div>
  
</footer>
    </>
  )
}

export default Footer
