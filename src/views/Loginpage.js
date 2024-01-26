import { useEffect, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import Signup from "../components/Signup";
import Login from "../components/Login";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Loginpage() {
    const [signup, setSignup] = useState(false);
    
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:4000/login", { withCredentials: true })
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