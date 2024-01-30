import axios from "axios"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

import Login from "../components/Login"
import Signup from "../components/Signup"
import MyNavbar from "../components/MyNavbar"

export default function Loginpage() {
    const [signup, setSignup] = useState(false);
    
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("/api/login", { withCredentials: true })
        .then((res) => {
            if (res.status === 200) {
                navigate("/chat")
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }, [])
    
    return (
    <>
        <MyNavbar />
        {signup === false ? <Login fun={setSignup} /> : <Signup fun={setSignup} />}
    </>
    );
}