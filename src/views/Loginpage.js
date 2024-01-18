import { useState } from "react";
import MyNavbar from "../components/MyNavbar";
import Signup from "../components/Signup";
import Login from "../components/Login";

export default function Loginpage() {
    const [loginAccount, setLoginAccount] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signup, setSignup] = useState(false);

    return (
    <>
        <MyNavbar />
        {signup === true ? <Signup /> : <Login />}
    </>
    );
}