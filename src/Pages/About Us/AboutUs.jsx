import Footer from "../../Components/Footer/Footer"
import { Navigation } from "../../Components/Navigation/Navigation"


const AboutUs = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-pirmary text-5xl mb-5 mt-10">Məhsullarımızla fəxr edirik</h4>
        <p className="text-center mb-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>
      <div className="flex items-center justify-center">
        <img className="mb-10" src="../../../public/About Us/Images.png" alt="" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-pink mb-5 mt-5 text-2xl">About Us</h2>
        <h3 className="font-bold text-4xl text-pirmary mb-5">Biz məlumat analitiklərindən ibarət komandayıq</h3>
        <p className="text-center mb-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et <br /> justo duo dolores et ea rebum.</p>
      </div>
      <div className="flex items-center bg-seven p-10 gap-20 ">
        <div className="flex flex-col  ml-20">
          <h2 className="font-bold text-pink mb-5 mt-5 text-2xl">Our Goals</h2>
          <h3 className="font-bold text-4xl text-pirmary mb-5">Biznesinizi yüksəltmək üçün <br />
növbəti səviyyə</h3>
          <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br /> diam nonumy eirmod  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero  eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
        <div className="flex flex-col mr-20 ">
          <h2 className="font-bold text-pink mb-5 mt-5 text-2xl">Our Vision</h2>
          <h3 className="font-bold text-4xl text-pirmary mb-5">Böyüyən şirkətlər üçün həllər <br /> təqdim etmək</h3>
          <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br /> diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col items-center justify-center mt-20">
          <h4 className="font-bold text-4xl text-pirmary mb-4">Korporativ dəyərlərimiz</h4>
          <p className="mb-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className="bg-eight w-160 ml-10 mr-10  rounded-3xl">
          <div className="flex items-center justify-center gap-10 p-10">
            <div>
              <img src="../../../public/About Us/Icon (11).png" alt="" />
              <h5 className="font-bold text-pirmary pt-2 pb-2">Security and privacy</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
            <div><img src="../../../public/About Us/Iconography - Caesarzkn.png" alt="" />
              <h5 className="font-bold text-pirmary pt-2 pb-2">Built-in AI features
              </h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p></div>
            <div><img src="../../../public/About Us/Icon (12).png" alt="" />
              <h5 className="font-bold text-pirmary pt-2 pb-2">Collaborate with others</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p></div>
          </div>
          <div className="flex items-center justify-center gap-10 p-10">
            <div>
              <img src="../../../public/About Us/Group (2).png" alt="" />
              <h5 className="font-bold text-pirmary pt-2 pb-2">Real time sync
              </h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
            <div>
              <img src="../../../public/About Us/Iconography.png" alt="" />
              <h5 className="font-bold text-pirmary pt-2 pb-2">Built-in AI features</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
            <div>
              <img src="../../../public/About Us/Icon (13).png" alt="" />
              <h5 className="font-bold text-pirmary pt-2 pb-2">Easy notes organization</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-20 mt-20 mb-20">
        <div className="mb-80 ml-20 ">
          <h3 className="font-bold text-4xl text-pirmary ">Bacarıqlı Komandamız</h3>
          <p className="pt-5">Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor invidunt ut <br /> labore.</p>
        </div>
        <div className="">
          <img className="ml-20 mt-10" src="../../../public/About Us/List.png" alt="" />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUs