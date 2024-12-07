import { useState } from 'react'
import Header from './components/Header'
import HeroBannrer from './components/HeroBannrer'
import Players from './components/Players'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [balance, setbalance] = useState(0)

  return (
    <>
     <Header balance={balance}/>
    <div className=' mx-20'>
     <HeroBannrer balance={balance} setbalance={setbalance}/>

  <Players balance={balance} setbalance={setbalance}/>
  
    </div>
    <div className='bg-black'>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
