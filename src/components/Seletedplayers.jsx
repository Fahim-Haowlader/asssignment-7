import React from 'react'
import Seletedplayer from './Seletedplayer'

const Seletedplayers = ({selectedPlayer,setSelectedPlayer,show,setshow}) => {
  const handelClick = ()=>{
    setshow(!show)  }

  return (
    <>
    <div>
        {selectedPlayer.map(player  => <Seletedplayer key={player.id} player={player} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/> )}
    </div>
    <button className='text-2xl font-bold bg-yellow-200 p-4 ml-[500px] justify-center rounded-xl ' onClick={handelClick}> {selectedPlayer.length ? "Add More Player":"Add Player"}  </button>
    </>
  )
}

export default Seletedplayers

