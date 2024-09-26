import React from 'react'
import img0 from "../assets/img03.jpg"

const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className="flex flex-row mt-2">
            <img src={img0} className='h-[55px] w-[55px] mx-3 rounded-full' alt="" />
            <div className="flex flex-col">
                <h3 className='text-white text-[25px] font-poppins'>Imranhud</h3>
                <p className='text-dimWhite text-[15px] font-poppins'>Bsc Biochemistry</p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between mr-3">
            <button type="button" className='text-white mx-2 text-[16px] bg-cyan-300 p-2 rounded'>Sign up</button>
            <button type="button" className='text-white text-[16px] bg-amber-400 p-2 rounded'>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar