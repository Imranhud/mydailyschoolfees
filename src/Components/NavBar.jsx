import React from 'react'
import img0 from "../assets/img01.jpg"

const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className="flex flex-row mt-2">
            <img src={img0} className='h-[55px] w-[55px] mx-2 rounded-full' alt="" />
            <div className="flex flex-col flex-1">
                <h3 className='text-white sm:text-[25px] font-semibold text-[18px] font-poppins '>Imranhud</h3>
                <p className='text-dimWhite text-[13px] font-poppins'>Bsc. Biochemistry</p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between mr-3">
            <button type="button" className='text-white mx-2 text-[14px]  outline-0 sm:w-[90px] w-[60px] bg-cyan-300 p-1 rounded'>Sign up</button>
            <button type="button" className='text-white text-[14px] outline-0 bg-amber-400 sm:w-[90px] w-[60px] p-1 rounded'>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar