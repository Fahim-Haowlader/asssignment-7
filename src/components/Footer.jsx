import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black ' >
            <div className='mx-[88px] bg-white flex flex-col gap-5 justify-center items-center pb-16 rounded-b-xl'>
                <p className='text-2xl'>Get the latest updates and news right in your inbox!</p>
                <div>
                    <input type="text" placeholder='Enter Your Mail' className='text-lg border border-gray-300 py-2 px-4 w-[400px] rounded-xl mr-3' />
                    <button className='bg-green-400 px-6 py-2 rounded-xl font-bold text-lg' > Subscribe</button>
                </div>
            </div>
            <img src="../src/assets/logo-footer.png" alt="" className='text-center py-10 mx-auto' />
            <div className='text-gray-400 mx-24 flex justify-between pb-14'>
                <div>
                    <h2 className='text-xl font-semibold text-white pb-4'>About Us</h2>
                    <p className='w-72'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-white text-xl font-semibold'>Quick Links</h2>
                    <p>Home</p>
                    <p>services</p>
                    <p>About</p>
                    <p>Contect</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold pb-4 text-white'>Subsceibe</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className='pt-5 flex'>
                        <input className='py-2 px-4 rounded-l-xl' type="text" placeholder='Enter Your Email' />
                        <button className='text-xl text-black bg-green-400 rounded-r-xl py-2 px-6 font-bold'>Subcribe</button>
                            </div>
                </div>
            </div>
            <p className='text-center text-gray-400 pb-10 pt-5'>All Right Are reserved</p>
        </div>
    )
}

export default Footer
