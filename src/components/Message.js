

export default function Messages(props){
    let count = 0
    return(
        <>
            {props.messages.map((message) => {
                return(
                    <h1 key={count++}>{message}</h1>
                )
            })}
        </>
    )
}