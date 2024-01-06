
import { Navigation } from '../../Components/Navigation/Navigation'
const Home = () => {
  return (
    <>
      <Navigation />
      <div>
        <div className='flex flex-col items-center mt-20 mr-58 gap-7  text-center'>
          <h1 className="text-5xl font-bold text-pirmary ">The Best Software to Grow <br />
           your Sales and Services</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat.</p>
             <div className='flex items-center justify-center'>
             <input type="text" placeholder='Enter your email' className='w-80 px-4 py-2 border rounded-md' />
             <button className='relative right- px-4 py-2 bg-pirmary text-white rounded-md'>Get Free trial</button>
             </div>
        </div>
        <div className='flex items-center justify-center h-50 w-1/1 mt-20'>
        <img src='../../../public/weet.png' alt className='rounded-lg shadow-lg w-2/3'/>
      </div>
      </div>
      <div className='flex flex-col items-center mt-20 mr-58 gap-4  text-center'>
        <p className='text-pink  font-bold'>High-quality</p>
        <h2 className='text-4xl text-center font-bold text-pirmary '>We have the Best Solution <br />
         for your Business</h2>
      </div>
      <div className='High'>
        <div>
          <img src="../../../public/Icon 1.svg" alt="" />
          <h3>High security to protect from piracy</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div></div>
        <div></div>
      </div>
      
    </>
  )
}

export default Home