import Footer from "../../Components/Footer/Footer"
import { Navigation } from "../../Components/Navigation/Navigation"


const Blog = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center ">
        <h4 className="font-bold text-pirmary text-5xl mt-10 mb-5">Ən son bloqlarımızı oxuyun</h4>
        <p className="text-center mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros <br />
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
      </div>

      <div className="flex items-center justify-center border border-solid rounded-3xl pt-10 pb-10 gap-60 ml-20 mr-20">
        <div>
          <h3 className="text-pink font-bold text-4xl mb-4">Trend Post</h3>
          <h3 className="font-bold text-pirmary text-3xl mb-4">Ödənişinizi daha sürətli almağınıza <br /> kömək edəcək yeni faktura xüsusiyyətləri</h3>
          <p className="mb-7">Over the past few months, we’ve added several new features to SaaS <br /> Invoicing to help any business get paid faster and streamline their collection <br /> workflows.</p>
          <p>Luke Matthews l  November 8, 2021</p>
        </div>
        <div>
          <img className="w-80 rounded-3xl" src="../../../public/blog/pexels-photo-3184357.webp" alt="" />
        </div>
      </div>

      <div className="mt-20 mb-10">
        <h3 className="flex items-center justify-center text-pirmary font-bold text-5xl">Bütün Postlar</h3>
      </div>
      <div className="flex items-center justify-center mb-20">
        <img src="../../../public/blog/List (1).png" alt="" />
      </div>
      <Footer />
    </>
  )
}

export default Blog