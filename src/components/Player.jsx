import { ToastContainer, toast } from 'react-toastify';


const Player = ({playerdata,setSelectedPlayer,selectedPlayer,balanced,setbalance}) => {

  let {id,name,country,image_url,price,type} = playerdata
  
  

  const handleclick = async (playerdata) => {
    if (balanced < playerdata.price){

      toast.error(' You Need More Money To Bid')
     
  
     
    }
else if (selectedPlayer.includes(playerdata)){
  toast.warn('Player Is Already In The Team ')



 
}
else if (selectedPlayer.length >= 6){

  toast.info('Your Team Is Full')
}
else if(!(selectedPlayer.includes(playerdata))){
  toast.success('Player Added To Team')
  setSelectedPlayer([...selectedPlayer,playerdata])
  const NewPrice = ( balanced - price)
  setbalance(NewPrice)
  
}

}
 

  return (
    
    <div className='border border-gray-200 rounded-2xl p-5'>
        <div>
            <img src={image_url} alt="" className='rounded-xl w-96 h-52 object-cover' />
            <hr className='mt-5' />
            <div className='flex gap-6 items-center my-4'><img className='border-4 rounded-[50%] p-1 border-black ' src="../src/assets/icons8-person-30.png" alt="" />
            <p className='text-xl font-semibold'>{name}</p>
            </div>
            
            <div className='flex gap-5 items-center mb-4'><img src="../src/assets/icons8-flag-50.png" alt="" className='w-6 h-6 mx-3' />
            <p className='text-lg'>{country}</p>
            </div>
            <p className='px-20 py-2 w-full text-center bg-gray-100 inline-block rounded-xl text-xl font-semibold '> {type}</p>
            <p className='text-xl my-3 font-bold mx-2'>Price:${price}</p>
            <button className='border border-gray-300 rounded-xl  px-[110px] py-3 text-lg font-bold bg-green-300 hover:bg-green-400 active:bg-green-00' onClick={()=>{handleclick(playerdata)}}>Choose Player</button>
        
  
        </div>
        
    </div>
  )
}

export default Player;
