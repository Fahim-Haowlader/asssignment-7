import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Seletedplayer = ({player,setSelectedPlayer,selectedPlayer}) => {

    const handleClick =(player) =>{
      toast.error(`Player Removed From The Team`)
        const newTeam = selectedPlayer.filter(p => p !== player)
        setSelectedPlayer(newTeam)

        

  

    }

  return (
    <>
    
    <div className='flex justify-between items-center border border-gray-200 rounded-2xl p-4 mb-7'>
    <div className='flex gap-6'>
      <img src={player.image_url} alt="" className=' rounded-xl h-24 w-40' />
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold mt-3'>{player.name}</h2>
        <h3 className='text-xl text-gray-500'>{player.type}</h3>
      </div>
    </div>
    <div>
        <button onClick={()=> handleClick(player)}>
    <img src="../src/assets/icons8-remove-30.png" alt="" className='mr-5' />
        </button>
    </div>
    </div>

</>
  )
}

export default Seletedplayer
