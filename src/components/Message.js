

export default function Messages(props){
    return(
        <>
            {props.messages.map((message) => {
                return(
                    <h1 key={message.id}>{message.text} - {message.author}</h1>
                )
            })}
        </>
    )
}