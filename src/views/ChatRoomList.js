import { useState } from "react"
import MyNavbar from "../components/MyNavbar"
import ChatRoomList from "../components/ChatRoomList"
import ChatRoom from "../components/Chat"
import Reloader from "../components/Reloader"
import { useNavigate } from "react-router"

export default function Chatpage() {

    const [ChatRoom, setChatRoom] = useState("main")
    const navigate = useNavigate()

    const handleCall = (id) => {
        navigate("/chat/" +id)
    }

    return (
    <>
        <MyNavbar />
        <ChatRoomList fun={handleCall} />
    </>
    )

}