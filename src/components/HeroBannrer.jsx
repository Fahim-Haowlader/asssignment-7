import { ToastContainer, toast } from 'react-toastify';


const HeroBannrer = ({balance,setbalance}) => {
const handleClick = ()=>{
  setbalance(balance+10000000)
  toast.info('Money Added For Bid')

}

  return (
    <div className="flex flex-col justify-center items-center gap-7 py-16 mt-10 rounded-2xl bg-[url('../src/assets/bg-shadow.png')] bg-black">
      <img src="../src/assets/banner-main.png" alt="" />
      <h1 className='text-white text-4xl font-bold'> Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <h3 className='text-gray-400 text-2xl font-semibold'>Beyond Boundaries Beyond Limits</h3>
      <button className='bg-green-400 hover:bg-green-500 active:bg-green-600 px-5 py-3 rounded-xl text-xl font-semibold border border-white' onClick={handleClick}>Claim Free Credit</button>
      
    </div>
  )
}

export default HeroBannrer
