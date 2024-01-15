
import Features from '../../Components/Features/Features'
import Footer from '../../Components/Footer/Footer'
import LogoIpsum from '../../Components/LogoIpsum/Jogoipsum'
import { Navigation } from '../../Components/Navigation/Navigation'
const Home = () => {
  return (
    <>
      <Navigation />
      <div>
        <div className='flex flex-col items-center mt-20 mr-58 gap-7  text-center'>
          <h1 className="text-5xl font-bold text-pirmary ">Böyümək üçün ən yaxşı proqram <br />
Satış və Xidmətləriniz</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat.</p>
          <div className='flex items-center justify-center'>
            <input type="text" placeholder='Enter your email' className='w-80 px-4 py-2 border rounded-md' />
            <button className='relative right- px-4 py-2 bg-pirmary text-white rounded-md'>Get Free trial</button>
          </div>
        </div>
        <div className='flex items-center justify-center h-50 w-1/1 mt-20'>
          <img src='../../../public/weet.png' alt className='rounded-lg shadow-lg w-2/3' />
        </div>
      </div>
      <div className='flex flex-col items-center mt-20 mr-58 gap-4  text-center'>
        <p className='text-pink  font-bold'>High-quality</p>
        <h2 className='text-4xl text-center font-bold text-pirmary '>Ən Yaxşı Həllimiz var <br />
Biznesiniz üçün</h2>
      </div>
      <div className='flex items-center justify-center ml-20 mr-20 mt-20   bg-tartiary rounded-xl gap-5'>
        <div className='p-7 '>
          <img src="../../../public/Icon 1.svg" alt="" />
          <h3 className='text-3xl font-bold text-one mb-4 mt-2'>Piratdan qorunmaq üçün yüksək təhlükəsizlik</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className='p-7'>
          <img src="../../../public/Icon 2.svg" alt="" />
          <h3 className='text-3xl font-bold text-one mb-4 mt-2'>Premium keyfiyyətli performans</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className='p-7'>
          <img src="../../../public/Icon 3.svg" alt="" />
          <h3 className='text-3xl font-bold text-one mb-4 mt-2'>Tam zamanlı müştəri dəstəyi - 24/7</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
      </div>
      <div className='flex items-center justify-center ml-20 mr-20 mt-20  gap-60  '>
        <div className=''>
          <h4 className='font-bold text-three text-2xl mb-3'>Niyə bizimlə işləməlisiniz?</h4>
          <h2 className='font-bold text-one text-4xl mb-4'>Biznesinizi yüksəltmək üçün <br />
növbəti səviyyəyə</h2>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex items-center mb-4">
            <img src="../../../public/Icon.svg" alt="" className='mr-4 ' />
            <p className='font-bold text-one text-1xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod.</p>
          </div>
          <div className="flex items-center mb-4">
            <img src="../../../public/Icon.svg" alt="" className='mr-4' />
            <p className='font-bold text-one text-1xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod.</p>
          </div>
          <div className="flex items-center mb-4">
            <img src="../../../public/Icon.svg" alt="" className='mr-4' />
            <p className='font-bold text-one text-1xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod.</p>
          </div>
        </div>
      </div>
      <div className='bg-tartiary flex items-center ml-20 mr-20 mt-20 w-576 h-435'>
        <div className='p-10'>
          <h2 className='font-bold text-pirmary text-4xl mb-5 '>Daha çox təəssürat, daha çox <br />
çevrilmələr</h2>
          <p className='text-gray-700 mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br /> diam nonumy  eirmod tempor invidunt ut labore et dolore<br /> magna aliquyam erat, sed diam  voluptua invidunt ut labore.</p>
          <button className='px-7 py-2 rounded-lg bg-black text-white border-solid'>Get Free trial</button>
        </div>
        <div className=' '><img src="../../../public/Image.png" alt="" className='  p-10' /></div>
      </div>
      <LogoIpsum />
      <div className='flex items-center justify-center ml-10 mr-20 mt-20  gap-80  '>
        <div className=''>
          <h4 className='font-bold text-three text-2xl mb-3'>Discover More</h4>
          <h2 className='font-bold text-one text-4xl mb-4'>Satışlarınızı təhlil edin və <br />
marketinq aparın</h2>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex items-center mb-4">
            <img src="../../../public/Feature Icon with circle.png" alt="" className='mr-4 ' />
            <p className=''><h1 className=' text-one text-1xl font-bold'>Sales Tracking</h1>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="flex items-center mb-4">
            <img src="../../../public/Feature Icon with circle (1).png" alt="" className='mr-4' />
            <p className=''><h1 className='font-bold text-one text-1xl'>Project Management</h1>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="flex items-center mb-4">
            <img src="../../../public/Feature Icon with circle (2).png" alt="" className='mr-4' />
            <p className=''><h1 className='font-bold text-one text-1xl'>Activity Report</h1>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <Features />
      <div className='flex flex-col items-center justify-center '>
        <div><h2 className='text-3xl text-center font-bold text-pirmary'>Çarpıcı nəticələr bizim <br />
müştərilərin təcrübəsi var</h2></div>
        <div className=' flex my-10 items-center justify-center gap-20  rounded-xl ml-0 mr-5'>
          <div className='border border-solid text-center p-10 rounded-xl'>
            <p>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr, sed <br />diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna <br /> aliquyam erat, sed diam voluptua.</p>
            <img className='h-50 w-20 ml-20 p-2' src="../../../public/pexels-photo-1222271.jpeg" alt="" />
            <h6>Ron wood</h6>
          </div>
          <div className='border border-solid text-center p-10 rounded-xl'>
            <p>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr, sed <br />diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna <br /> aliquyam erat, sed diam voluptua.</p>
            <img className='h-50 w-20 ml-20 p-2' src="../../../public/small-2.jpeg" alt="" />
            <h6> Şahruddin</h6>
          </div>
          <div className='border border-solid text-center p-10 rounded-xl'>
            <p>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr, sed <br />diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna <br /> aliquyam erat, sed diam voluptua.</p>
            <img className='h-50 w-20 ml-20 p-2' src="../../../public/small-3.jpeg" alt="" />
            <h6>Qara Bala</h6>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home