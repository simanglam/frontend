import { useEffect, useState } from "react"
import axios from "axios"
import { Card, Button } from "react-bootstrap"
import "../styles/ChatRoomList.scss"
import "../styles/BasicColor.scss"
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
                setChatRoom([
                    {
                        "id": "clrj9f6l50000o9vc1nip29nz",
                        "description": "Test",
                        "name": "Test"
                    },
                    {
                        "id": "clrjez36y0000803uo6wk5qau",
                        "description": "Test2",
                        "name": "Test2"
                    }
                ])
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