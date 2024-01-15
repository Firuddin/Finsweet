import Footer from "../../Components/Footer/Footer"
import { Navigation } from "../../Components/Navigation/Navigation"


const Pricing = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center p-10">
        <h2 className="font-bold text-pirmary text-4xl text-center pb-4">Qiymətləndirmə bunu planlaşdırır <br />
sizə uyğundur</h2>
        <p className="pb-4">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
        <div className="flex items-center w-15 text-white rounded-xl p-2 w-60  bg-secondary gap-20">
          <div className="bg-pirmary rounded-md w-30 p-2">
            <button className="pl-0 pr-5 ">Monthly</button></div>
          <h5 className="text-pirmary font-bold ">Yearly</h5>
        </div>
      </div>
      <div>
        <img className="w-160 p-20  pt-20 h-160" src="../../../public/Product/Plans (1).png" alt="" />
      </div>


      <div className="flex items-center  bg-seven w-160 p-20 h-160 rounded-2xl ml-20 mr-20 gap-40">
        <div className="pb-80">
          <h5 className="font-bold text-pirmary text-3xl pb-3">Tez-tez soruşulan <br />
Suallar</h5>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing<br />  elitr, sed diam nonumy eirmod tempor invidunt.</p>
        </div>
        <div className=" flex flex-col gap-5">

          <div className="bg-four rounded-md p-7 ">
            <div className="flex items-center gap-80 ">
              <h5 className="font-bold text-pirmary pb-3">How do I grow my business?</h5>
              <img src="../../../public/Product/Expander.png" alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br /> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </div>

          <div className="bg-four rounded-md p-7 flex items-center gap-80">
            <h5 className="font-bold text-pirmary">Can I cancel my subscription?</h5>
            <img src="../../../public/Product/Expander (1).png" alt="" />
          </div>

          <div className="bg-four rounded-md p-7 flex items-center gap-80">
            <h5 className="font-bold text-pirmary">How do I contact the suport?</h5>
            <img src="../../../public/Product/Expander (1).png" alt="" />
          </div>

          <div className="bg-four rounded-md p-7 flex items-center gap-80">
            <h5 className="font-bold text-pirmary">Is a credit card the required?</h5>
            <img src="../../../public/Product/Expander (1).png" alt="" />
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Pricing