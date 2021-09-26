import React from 'react'
import { INoticeBoard } from './interface'

export const NoticeBoard = (props : INoticeBoard) => {
    return (
        <div className="notice-board my-20" >
            <div className="container mx-auto" style={{background: props.background}}>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-6 sm:pt-2">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-9/12 mb-6	">
                            {props.title}
                            {props.subtitle}
                        </div>
                    </div>
                    <div>
                        <img src={props.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}
