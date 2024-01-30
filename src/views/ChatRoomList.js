import { useNavigate } from "react-router"

import MyNavbar from "../components/MyNavbar"
import ChatRoomList from "../components/ChatRoomList"

export default function Chatpage() {

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