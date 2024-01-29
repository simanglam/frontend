import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import "../styles/Login.scss"

export default function Login(props) {
    const [signupAccount, setSignupAccount] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const navigate = useNavigate()

    const signUp = async () => {
        try {
            await axios.post("/api/login", {email: signupAccount, password: signupPassword})
            navigate("/chat")
        }
        catch(e) {
            console.log(e)
        }
    }
    

    return (
        <div className="login">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>帳號</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={signupAccount} onChange={(e) => {setSignupAccount(e.target.value)}}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={signupPassword} onChange={(e) => {setSignupPassword(e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" onClick={signUp}>
                    登入
                </Button>

                <Button onClick={() => {props.fun(true)}}>註冊</Button>
            </Form>
        </div>
    )
}