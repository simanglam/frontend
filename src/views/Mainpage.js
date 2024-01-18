
import MyNavbar from "../components/MyNavbar";
import Introductory from '../components/Introdutory'
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