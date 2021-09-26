import React from 'react'
import HeroImage from '../../Assets/Images/HeroImage.png'

const Hero = () => {
    return (
        <div className="hero pt-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="lg:my-6  my-6 md:my-0" >
                        <div className="pl-8">
                            <h1 className="text-2xl sm:text-5xl  my-6 sm:my-8 font-extrabold">
                            Get the <span className="header-head-span">vision</span><br/> you <span className="header-head-span">deserve</span>
                            </h1>
                            <h4 className="text-md sm:text-xl">
                                Providing Best Quality Eyewear Since 1957.
                            </h4>

                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <img src={HeroImage}/>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Hero