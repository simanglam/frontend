import { Button, Form } from "react-bootstrap"
import { useState } from "react"
//import "../styles/Signup.scss"
import { useNavigate } from "react-router"
import axios from "axios"

export default function Signup(props) {
    const [signupAccount, setSignupAccount] = useState("")
    const [signupNickname, setSignupNickname] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const [signupPasswordCheck, setSignupPasswordCheck] = useState("")
    const navigate = useNavigate()

    const signUp = async () => {
        if(signupPassword !== signupPasswordCheck) {
            alert("密碼不一致")
            return
        }
        try {
            await axios.post("/api/signup", {email: signupAccount, username: signupNickname, password: signupPassword})
            navigate("/chat")
        }
        catch(e) {
            e.response.status === 409 ? alert("帳號已存在") :
            console.log(e)
        }
    }

    

    return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>帳號</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={signupAccount} onChange={(e) => {setSignupAccount(e.target.value)}}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNickname">
            <Form.Label>暱稱</Form.Label>
            <Form.Control placeholder="Enter Nickname" value={signupNickname} onChange={(e) => {setSignupNickname(e.target.value)}}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control type="password" placeholder="Password" value={signupPassword} onChange={(e) => {setSignupPassword(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>確認密碼</Form.Label>
            <Form.Control type="password" placeholder="Password" value={signupPasswordCheck} onChange={(e) => {setSignupPasswordCheck(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" onClick={signUp}>
            註冊
        </Button>
        <Form.Text className="text-muted">
            已經有帳號？<Button onClick={() => {props.fun(false)}}>登入</Button>
        </Form.Text>
    </Form>    
    )
}
