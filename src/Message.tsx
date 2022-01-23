import React from 'react'
import "./Message.css"


export type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProps) {
    return (

        <div className="main">
            <div className="avatar">
                <img src={props.avatar}/>
            </div>
            <div className="message-time">
                <div className="corner"></div>
                <div className="body-message">
                    <div className="message">
                        <div className="name">
                            {props.name}
                        </div>
                        <div className="text">
                            {props.message}
                        </div>
                    </div>
                </div>
                <div className="time">
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
