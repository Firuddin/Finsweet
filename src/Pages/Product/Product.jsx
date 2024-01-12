import LogoIpsum from "../../Components/LogoIpsum/Jogoipsum"
import { Navigation } from "../../Components/Navigation/Navigation"


const Product = () => {
  return (
    <>
      <Navigation />
      <div className="flex items-center ml-20 mr-0 gap-60 mt-20">
        <div>
          <h2 className="font-bold text-pirmary text-6xl pb-8">Grow your Sales <br />  and Services</h2>
          <p className="pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex items-center gap-5">
            <button className="bg-pirmary rounded-xl pl-8 pr-8 pt-4 pb-4 text-four ">Get Started</button>
            <button className="bg-pirmary rounded-xl pl-8 pr-8 pt-4 pb-4 text-four">Contact Us</button>
          </div>
        </div>
        <div>
          <img className="max-w-120 max-h-80 mr-20" src="../../../public/Product/Image (1).png" alt="" />
        </div>
      </div>
      <LogoIpsum />
      <div className="bg-six">
        <h2 className="text-center font-bold text-3xl mt-20 pt-20 pb-10">Get the best out of your company <br /> with our service</h2>
        <div className="bg-four w-160 ml-20 mr-20 rounded-3xl">
          <div className="flex items-center justify-center gap-10">
            <div>
              <img src="../../../public/Product/Icon (7).png" alt="" />
              <h5 className="font-bold text-pirmary">Security and privacy</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
            <div><img src="../../../public/Product/Icon (5).png" alt="" />
              <h5 className="font-bold text-pirmary">Security and privacy</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p></div>
            <div><img src="../../../public/Product/Icon (6).png" alt="" />
              <h5 className="font-bold text-pirmary">Security and privacy</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p></div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div>
            <img src="../../../public/Product/Icon (2).png" alt="" />
              <h5 className="font-bold text-pirmary">Security and privacy</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
            <div>
            <img src="../../../public/Product/Icon (3).png" alt="" />
              <h5 className="font-bold text-pirmary">Security and privacy</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
            <div>
            <img src="../../../public/Product/Icon (4).png" alt="" />
              <h5 className="font-bold text-pirmary">Security and privacy</h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy eirmod tempor.</p>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Product