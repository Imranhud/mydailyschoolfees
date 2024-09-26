import React from 'react'
import NavBar from './NavBar'


const Heroo = () => {
  return (
    <>
      <NavBar />
      <div className="bgImg ss:ml-[15px] mx-auto mt-4">
      <section>
        <span className='font-sans font-bold text-green-400 text-[35px]'>Pay4Me,</span><br />
        <span className='font-serif font-bold text-blue-600 text-[25px]'>mydailyschoolfees</span><br />
        <span className='font-sans font-bold text-blue-600 text-[16px]'>A great solution to me</span>

        <section className='font-sans text-white mt-5 font-bold text-[18px]'>
          Trusted by thousands of <span className='font-bold text-[18px]'>students...</span>
        </section>
      </section>
    </div>
    </>
  )
}

export default Heroo