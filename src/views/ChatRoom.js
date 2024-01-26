import MyNavbar from "../components/MyNavbar"
import Chat from "../components/Chat"
import { useParams } from "react-router"
import socket from "../components/Socket"
import { useEffect, useState } from "react"


export default function ChatRoom(props) {

    const { id } = useParams()
    const [isConnect, setConnect] = useState(socket.connected)
    

    useEffect(() => {
        socket.emit("add room", id, (error) => {
            if (error) {
                alert(error)
            }
        })
        const onConnect = () => {
            setConnect(true)
        }
    
        const onDisconnect = () => {
            setConnect(false)
        }

        socket.on("connect", onConnect)
        socket.on("disconnect", onDisconnect)

        return(() => {
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
            socket.disconnect()
        })
    }, [isConnect, id])

    return(
        <> 
            <MyNavbar />
            <Chat room={id} socket={socket} />

        </>
    )
}