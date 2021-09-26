import { MailOutlined, PhoneOutlined, PushpinOutlined } from '@ant-design/icons'
import React from 'react'
import { ILocationCard } from './interface'

const LocationCard = (props: ILocationCard) => {
    return (
        <div className="map-location-card grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center	">
                <div className=" max-w-sm px-4 md:px-0 py-6 md:py-0">
                <p className="mb-4 flex items-center"><PushpinOutlined  className="mr-2"/> {props.address}</p>
                <p className="mb-4 flex items-center"><PhoneOutlined  className="mr-2"/> {props.phone}</p>
                <p className="mb-4 flex items-center"><MailOutlined className="mr-2"/>{props.email}</p>
                </div>
            </div>
            <div>
            <iframe className="w-full h-full" src={props.map} loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default LocationCard