import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import "../styles/Signup.scss";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Signup() {
    const [signupAccount, setSignupAccount] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupPasswordCheck, setSignupPasswordCheck] = useState("");
    const navigate = useNavigate();

    axios.request.post(process.env.api_url + "/login").then((res) => {
        if (res.status === 200) {
            navigate("/mainpage");
        }
    })


}
