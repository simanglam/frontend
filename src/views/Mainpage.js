
import MyNavbar from "../components/MyNavbar";
import Introductory from '../components/Introdutory'
import ChatRoomList from "../components/ChatRoomList";
import MyFooter from "../components/MyFooter";
import "../styles/BasicColor.scss"
import "../styles/Mainpage.scss"

export const Mainpage = () => {
  return (
    <>
      <MyNavbar />
      <Introductory />
    </>
  );
}