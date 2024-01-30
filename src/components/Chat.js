import axios from 'axios';
import { useEffect, useState, useCallback } from 'react'
import MessagesInput from './MessageInput'
import Message from './Message'
import socket from './Socket'


export default function Chat(props) {
    const room = props.room
    const [Messages, setMessages] = useState([])

    const handleMessages = useCallback((message) => {
        setMessages((Messages) => [...Messages, JSON.parse(message)])
    }, [])

    const handleClick = async (message) => {
        await axios.post("/api/chatroom/" + room + "/messages", {
            text: message,
            createdAt: new Date(),
        }, { withCredentials: true, credentials: "cookie" })
    }

    useEffect(() => {
        socket.connect()
        
        return(() =>{
            socket.disconnect()
        })
    }, [])

    useEffect(() => {
        axios.get("/api/chatroom/" + room + "/messages", { withCredentials: true, credentials: "cookie" })
            .then((response) => {
                console.log(response.data)
                setMessages(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [room])

    useEffect(() => {
        socket.emit("add room", room)
        console.log(`Room added ${room}`)

        socket.on("chat message", handleMessages)
    

        return(() => {
            socket.off("chat message", handleMessages)
        })
    }, [room, handleMessages])


    return(
        <>
            <Message messages={Messages} />
            <MessagesInput send={handleClick} />
        </>
    )
}
