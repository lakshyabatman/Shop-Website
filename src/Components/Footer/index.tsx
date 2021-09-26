import React from 'react'
import {ReactComponent as PcwLogo} from '../../Assets/Images/pcw_logo_2.svg'
import {InstagramFilled , FacebookFilled} from '@ant-design/icons'
const Footer = () => {
    return (
        <div className="footer py-16">
            <div className="container mx-auto">
                <div className="grid  grid-cols-1 md:grid-cols-2 ml-2">
                    <div className="sm:mb-0 mb-4">
                        <PcwLogo/>
                    </div>
                    <div>
                        <h3 className="reach-us-on-head text-xl font-semibold	 ">Follow us on</h3>
                        <div className="flex mt-2">
                            <a href="https://instagram.com">
                                <InstagramFilled className="footer-icon" />
                            </a>
                            <a href="https://facebook.com">
                            <FacebookFilled className="footer-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer