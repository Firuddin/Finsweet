import { Navigation } from "../../Components/Navigation/Navigation"


const Pricing = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center p-10">
        <h2 className="font-bold text-pirmary text-4xl text-center pb-4">Pricing plans that <br /> suit you</h2>
        <p className="pb-4">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
        <div className="flex items-center w-15 text-white rounded-xl p-2 w-60  bg-secondary gap-20">
          <div className="bg-pirmary rounded-md w-30 p-2">
            <button className="pl-0 pr-5 ">Monthly</button></div>
          <h5 className="text-pirmary font-bold ">Yearly</h5>
        </div>
      </div>
      <div>
        <img className="w-160 p-20 h-160" src="../../../public/Product/Plans (1).png" alt="" />
      </div>
    </>
  )
}

export default Pricing