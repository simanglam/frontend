import axios from 'axios';
import { useEffect, useState } from 'react'
import MessagesInput from './MessageInput'
import Message from './Message'


export default function Chat(props) {
    const socket = props.socket
    const room = props.room
    const [Messages, setMessages] = useState([])

    const handleMessages = (message) => {
        setMessages((Messages) => [...Messages, message])
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

        axios.get("/api/chatroom/" + room + "/messages", { withCredentials: true, credentials: "cookie" })
            .then((response) => {
                setMessages(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

        return(() => {
            socket.off("chat message", handleMessages)
        })
    }, [room, socket])


    return(
        <>
            <Message messages={Messages} />
            <MessagesInput send={handleClick} />
        </>
    )
}
