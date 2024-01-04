
import { Navigation } from '../../Components/Navigation/Navigation'

const Home = () => {
  return (
    <>
      <Navigation />
      <div>
        <div className='flex flex-col items-center mt-20 mr-58 gap-5 h-screen text-center'>
          <h1 className="text-5xl font-bold text-pirmary ">The Best Software to Grow <br />
           your Sales and Services</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat.</p>
             <input type="text" placeholder='Enter your email' />
        </div>
      </div>
    </>
  )
}

export default Home