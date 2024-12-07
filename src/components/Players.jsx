import Player from "./Player"
import { useState,useEffect } from "react"
import Seletedplayers from "./Seletedplayers"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Players = ({balance,setbalance}) => {
  
    const balanced = balance
    const [show, setshow] = useState(true)
    const [Players, setPlayers] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState([])
    // setTimeout(()  => {
    //     fetch('https://raw.githubusercontent.com/Fahim-Haowlader/demo/refs/heads/main/players.json')
    //     .then(res => res.json())
    //     .then(data => setPlayers(data))
     
    // },1000)
    useEffect(() => {
        // setTimeout(()  => {
            fetch('playersData.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
         
        // },1000)
    
    }, [])
    const handelClick =()=>{
        setshow(!show)
    }

    return (
        <>
            <div className='mt-10 px-2'>
                
                <div className={` grid-cols-3 ${show ? "grid":"hidden"} gap-6 mt-16 mb-40`}>
                <div className='flex justify-between items-center col-span-3'>
                    <h3 className='text-3xl font-semibold '>Available Players</h3>
                    <div className='text-lg space-x-3 font-semibold'>
                        <button className = {`border ${ show ? "bg-green-300":" " } border-gray-500 rounded-lg px-5 py-1`} >Available</button>
                        <button className='border border-gray-500 rounded-lg px-5 py-1' onClick={handelClick}> Selected ({selectedPlayer.length})</button>
                    </div>
                </div>
                    { Players.map( playerdata => <Player balanced={balanced} setbalance={setbalance} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} key={playerdata.id} playerdata={playerdata}/> )}
                </div>
                <div className={`${show ? 'hidden':'block'}`}>
                <div className='flex justify-between items-center col-span-3'>
                    <h3 className='text-3xl font-semibold '>Selected Player ({selectedPlayer.length}/6)</h3>
                    <div className='text-lg space-x-3 font-semibold'>
                        <button className='border border-gray-500 rounded-lg px-5 py-1' onClick={handelClick}>Available</button>
                        <button className= {`border ${show ? " ":"bg-green-300"} border-gray-500 rounded-lg px-5 py-1`}> Selected ({selectedPlayer.length})</button>
                    </div>
                    </div>
                    <div className ="pt-10 pb-32">
                        <Seletedplayers selectedPlayer={selectedPlayer}  setSelectedPlayer={setSelectedPlayer} show={show} setshow={setshow}/>
                    </div>

               
                </div>
                <div className="flex justify-center border border-gray-200 rounded-t-xl p-5 border-b-0">
                    <p className="text-5xl font-bold pt-16">Subscribe to our Newsletter</p>
                </div>
            </div>

        
        </>
    )
}

export default Players
