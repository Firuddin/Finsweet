import { Navigation } from "../../Components/Navigation/Navigation"


const AboutUs = () => {
  return (
   <>
   <Navigation/>
   <div className="flex flex-col items-center">
    <h4 className="font-bold text-pirmary text-5xl mb-5 mt-10">We are proud of our products</h4>
    <p className="text-center mb-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
   </div>
   <div className="flex items-center justify-center">
    <img className="mb-10" src="../../../public/About Us/Images.png" alt="" />
   </div>
   <div className="flex flex-col items-center">
    <h2 className="font-bold text-pink mb-5 mt-5 text-2xl">About Us</h2>
    <h3 className="font-bold text-4xl text-pirmary mb-5">We’re a team of data analysts</h3>
    <p className="text-center mb-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et <br /> justo duo dolores et ea rebum.</p>
   </div>


   <div className="flex items-center bg-seven p-10 gap-20">
   <div className="flex flex-col ">
    <h2 className="font-bold text-pink mb-5 mt-5 text-2xl">Our Goals</h2>
    <h3 className="font-bold text-4xl text-pirmary mb-5">We’re a team of data analysts</h3>
    <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et <br /> justo duo dolores et ea rebum.</p>
   </div>


   <div className="flex flex-col">
    <h2 className="font-bold text-pink mb-5 mt-5 text-2xl">Our Vision</h2>
    <h3 className="font-bold text-4xl text-pirmary mb-5">We’re a team of data analysts</h3>
    <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br /> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et <br /> justo duo dolores et ea rebum.</p>
   </div>
   </div>
   </>
  )
}

export default AboutUs