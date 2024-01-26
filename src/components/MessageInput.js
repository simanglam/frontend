import React, { useState } from 'react'

export default function MessagesInput(props) {

    const [send, setSend] = useState("")
    const handleChange = (event) => {
        setSend(event.target.value)
    }

    return(
        <>
            <input type="text" onChange={handleChange} value={send} />
            <button onClick={() => {props.send(send); setSend("")}}>Send</button>
        </>
    )
}