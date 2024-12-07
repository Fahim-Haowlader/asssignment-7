import React from 'react'


const Header = ({balance}) => {
  return (
    <>
    <div className='sticky -top-7 bg-gray-50 pt-7 pb-5 px-20 opacity-90' >

    <div className="flex justify-between items-center " >
        <img src="../src/assets/logo.png" alt="" />
        <div className='flex items-center gap-16'>
            <ul className='flex gap-16 items-center text-xl text-gray-600 font-semibold' >
                <li>Home</li>
                <li>Team</li>
                <li>Player</li>
                <li>About</li>
            </ul>
           <div className='flex gap-2 items-center text-xl font-bold border border-gray-400 py-2 px-4 rounded-xl'>
            {balance} Coin <img src="../src/assets/icons8-coin-48.png" alt="" className='w-7 h-7'/>
           </div>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default Header
