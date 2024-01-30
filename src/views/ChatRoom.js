import { useParams } from "react-router"

import Chat from "../components/Chat"
import MyNavbar from "../components/MyNavbar"


export default function ChatRoom(props) {

    const { id } = useParams()

    return(
        <> 
            <MyNavbar />
            <Chat room={id} />

        </>
    )
}