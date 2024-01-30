import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"

import "../styles/BasicColor.scss"
import "../styles/ChatRoomList.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ChatRoomList(props) {

    let count = 0
    const [ChatRoom, setChatRoom] = useState([])
    const handleClick = (id) => {
        props.fun(id)
    }

    useEffect(() => {
        axios.get("/api/chatrooms", { withCredentials: true, credentials: "cookie" })
            .then((response) => {
                console.log(response)
                setChatRoom(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <h1>ChatRoomList</h1> 
            <div className="ChatRoomList">
            {ChatRoom.map((chatRoom) => {
                return (
                    <Card key={count++}>
                        <Card.Body>
                            <Card.Title>{chatRoom.name}</Card.Title>
                            <Card.Text>{chatRoom.description}</Card.Text>
                            <Button variant="primary" onClick={() => (handleClick(chatRoom.id))}>Join</Button>
                        </Card.Body>
                    </Card>
                )    
            })}
            </div>
        </>
    )
}