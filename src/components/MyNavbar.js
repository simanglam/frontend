import { useNavigate } from "react-router"
import { Navbar, NavbarBrand, Nav } from "react-bootstrap"

import "../styles/BasicColor.scss"
import "../styles/MyNavbar.scss"

function MyNavbar() {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar>
                <Nav>
                    <NavbarBrand onClick={() => {navigate("/")}}>首頁</NavbarBrand>
                    <Nav.Link>關於我們</Nav.Link>
                    <Nav.Link>團隊</Nav.Link>
                    <Nav.Link onClick={() => {navigate("/login")}}>登入</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MyNavbar;