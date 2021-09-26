import React from 'react'
import LocationCard from './LocationCard'


const ReachUs = () => {
    return (
        <div id="contact">
            <div className="container mx-auto my-20">
                <h1 className="text-3xl	font-bold mb-10 text-center sm:text-left">We're available at your service</h1>
                <LocationCard 
                phone=' +91 233993 43434' email='Prakashchashmey@gmail.com' 
                map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4243109398735!2d80.95196731503142!3d26.890025767539782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957da080f2f37%3A0x8fc4946b045a6f10!2sPrakash%20chashmey%20waley!5e0!3m2!1sen!2sin!4v1632619778300!5m2!1sen!2sin' 
                address='Gate No. 01, Yadav Colony Road, Kamala Nehru Nagar, Jabalpur - 482002, Near Hanuman Temple' />
                <div className="my-14" />
                <LocationCard 
                phone=' +91 233993 43434' email='Prakashchashmey@gmail.com' 
                map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4243109398735!2d80.95196731503142!3d26.890025767539782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957da080f2f37%3A0x8fc4946b045a6f10!2sPrakash%20chashmey%20waley!5e0!3m2!1sen!2sin!4v1632619778300!5m2!1sen!2sin' 
                address='Gate No. 01, Yadav Colony Road, Kamala Nehru Nagar, Jabalpur - 482002, Near Hanuman Temple' />
            </div>

        </div>
    )
}

export default ReachUs