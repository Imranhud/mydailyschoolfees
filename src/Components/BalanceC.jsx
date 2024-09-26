import React from 'react'

const BalanceC = () => {
  return (
    <div className='flex bg-lime-600 p-2 mx-[12px] rounded-xl mt-3 justify-between flex-col'>
        <div className='flex justify-between mb-2 flex-row'>
            <p className='text-dimWhite text-[14px] sm:text-[20px] font-poppins'>Available Balance</p>
            <p className='text-dimWhite text-[14px] sm:text-[20px] font-poppins'>Transaction History</p>
        </div>
        <div className='flex flex-1 justify-between flex-row'>
            <div className="text-black text-[20px] font-semibold sm:text-[22px] font-poppins">#27,389.34</div>
            <button type="button" className='bg-indigo-800 rounded-full px-3 text-white text-[13px] sm:text-[18px] font-poppins'>Add Money</button>
        </div>
    </div>
  )
}

export default BalanceC