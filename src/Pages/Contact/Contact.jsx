import { Navigation } from "../../Components/Navigation/Navigation"


const Contact = () => {
  return (
    <>
    <Navigation/>
      <h5 className="flex items-center justify-center font-bold text-pirmary text-3xl">Get in touch with us</h5>
      <div className="bg-seven flex items-center justify-center ml-20 mr-20 gap-80 rounded-3xl">
        <div className="flex flex-col">
          <h5 className="font-bold text-pirmary text-2xl">Drop us a message</h5>
          <p>We will get back to you as soon as possible.</p>
          <div className="p-2">
            <input className="mr-5 p-2 mb-5 mt-5 rounded-md" type="text" placeholder="Full name"/>
            <input className="ml-5 p-2 mb-5 rounded-md" type="text" placeholder="Company Name"/>
          </div>
          <input className="mb-5 p-2 rounded-md" type="text" placeholder="Work Email"/>
          <input className="mb-5 p-2 rounded-md" type="text" placeholder="Subject"/>
          <input className="p-2 pb-12 mb-5 rounded-md" type="text" placeholder="Message"/>
          <button className="bg-pirmary rounded-2xl p-2 text-white">send</button>
        </div>



        
        <div>
          <div className="flex items-center">
            <div>
              <img src="../../../public/Contact/Icon (8).png" alt="" />
            </div>
            <div className="">
              <h5>+ 1800 145 276</h5>
              <p>Free support</p>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <img src="../../../public/Contact/Icon (9).png" alt="" />
            </div>
            <div>
              <h5>+ 1800 145 276</h5>
              <p>Free support</p>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <img src="../../../public/Contact/Icon (10).png" alt="" />
            </div>
            <div>
              <h5>+ 1800 145 276</h5>
              <p>Free support</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact