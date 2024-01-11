

const Features = () => {
    return (
        <div>
            <div className="mt-10">
                <h4 className=" flex items-center justify-center font-bold text-3xl text-one">Features</h4>
            </div>
            <div className="flex my-10 items-center justify-center gap-10 bg-[#D798E126] rounded-md ml-20 mr-20">
                <div className="">
                    <img src="../../../public/Vector.png" alt="" />
                    <h4 className="font-bold text-2xl text-one">Advanced 256-bit encryption</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod <br /> tempor.</p>
                </div>
                <div className="py-5"><img className=" w-[1.5px]" src="../../../public/line.png" alt="" /></div>
                <div className="">
                    <img src="../../../public/msj.png" alt="" />
                    <h4 className="font-bold text-2xl text-one">Simple collaboration tools</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod <br /> tempor.</p>
                </div>
                 <div className="py-5"><img className=" w-[1.5px]" src="../../../public/line.png" alt="" /></div>
                <div className="">
                    <img src="../../../public/robot.png" alt="" />
                    <h4 className="font-bold text-2xl text-one">Customizable AI features</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod <br /> tempor.</p>
                </div>
            </div>
        </div>
    )
}

export default Features