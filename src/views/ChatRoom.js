import MyNavbar from "../components/MyNavbar"
import Chat from "../components/Chat"
import { useParams } from "react-router"
import { useEffect, useState } from "react"


export default function ChatRoom(props) {

    const { id } = useParams()

    return(
        <> 
            <MyNavbar />
            <Chat room={id} />

        </>
    )
}