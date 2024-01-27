import axios from 'axios';
import { useEffect, useState } from 'react'
import MessagesInput from './MessageInput'
import Message from './Message'


export default function Chat(props) {
    const socket = props.socket
    const room = props.room
    const [Messages, setMessage] = useState([""])

    const handleMessages = (message) => {
        setMessage((Messages) => [...Messages, message])
    }

    const handleClick = async (message) => {
        socket.emit("chat message", message, (error) => {
            if (error) {
                alert(error)
            }
        })
        await axios.post("/api/chatroom/" + room + "/messages", {
            text: message,
            createdAt: new Date(),
        }, { withCredentials: true, credentials: "cookie" })
    }

    useEffect(() => {
        socket.on("chat message", handleMessages)

        axios.get("http://localhost:4000/chat/chatroom/" + room + "/messages", { withCredentials: true, credentials: "cookie" })
            .then((response) => {
                response.data.messages.map((message) => {
                    handleMessages(message.text)
                })
            })
            .catch((error) => {
                console.log(error)
            })

        return(() => {
            socket.off("chat message", handleMessages)
        })
    }, [socket])


    return(
        <>
            <Message messages={Messages} />
            <MessagesInput send={handleClick} />
        </>
    )
}
