import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import "../styles/MessageInput.scss"

export default function MessagesInput(props) {

    const [send, setSend] = useState("")
    const handleChange = (event) => {
        setSend(event.target.value)
    }

    return(
        <div className='messageinput'>
            <InputGroup>
                <Form.Control value={send} onChange={handleChange}></Form.Control>
                <Button onClick={() => {props.send(send); setSend("")}}> Send </Button>
            </InputGroup>
        </div>
    )
}