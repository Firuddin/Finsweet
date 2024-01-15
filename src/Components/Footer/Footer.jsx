

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col  items-center justify-center  mb-20 mt-10">
                <h2 className="font-bold text-pirmary text-3xl text-center">Özünüzü böyütməyə hazırsınız <br />
bizimlə iş üçün?</h2>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                <button className=" bg-pirmary text-white p-2 mt-5 rounded-md">View Pricing</button>
            </div>
            <div className="bg-pirmary ">
                <div className="flex items-center justify-center gap-20 text-white p-10">
                    <div className="">
                        <h5>Company</h5>
                        <h5>About Us</h5>
                        <h5>Why Choose us</h5>
                        <h5>Pricing</h5>
                        <h6>Testimonial</h6>

                    </div>
                    <div>
                        <h5>Resources</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Terms and Condition</h5>
                        <h5>Blog</h5>
                        <h6>Contact Us</h6>
                    </div>
                    <div>
                        <h5>product</h5>
                        <h5>project managment</h5>
                        <h5>time tracker</h5>
                        <h5>time schedlu</h5>
                        <h6>Lead generate</h6>

                    </div>
                    <div>
                        <img className="mb-4" src="../../../public/Foter.png" alt="" />
                        <p className="mb-2">Subscribe to our Newsletter</p>
                        <div className=''>
                            <input type="text" placeholder='Enter your email' className='w-60 px-4 py-2 border rounded-md' />
                            <button className='relative right- px-4 py-2 bg-pink text-pirmary rounded-md'>Get Free trial</button>
                        </div>
                    </div>

                </div>
               <div className="flex items-center justify-center gap-4 p-10">
                <img className="w-80" src="../../../public/linefoter.png" alt="" />
                <p>© Copyright Finsweet 2022</p>
                <a href="https://www.facebook.com/"><img src="../../../public/Facebook.png" alt="" /></a>
                <a href="https://twitter.com/"><img src="../../../public/Vector (1).png" alt="" /></a>
                <a href="https://www.instagram.com/"><img src="../../../public/Group.png" alt="" /></a>
                <a href="https://www.linkedin.com/feed/"><img src="../../../public/Group (1).png" alt="" /></a>
                <img className="w-80" src="../../../public/linefoter.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer