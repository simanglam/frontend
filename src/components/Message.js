import { Container, Row, Col } from "react-bootstrap"

import "../styles/Message.scss"

export default function Messages(props){
    return(
        <div className="messages">
            {props.messages.map((message) => {
                return(
                    <div id="message" key={message.id}>
                        <Container>
                            <Row>
                                <Col id="left-col">{message.author}</Col>
                                <Col id="right-col">{message.created}</Col>
                            </Row>
                            <Row>
                                <Col>{message.text}</Col>
                            </Row>
                        </Container>
                    </div>
                )
            })}
        </div>
    )
}