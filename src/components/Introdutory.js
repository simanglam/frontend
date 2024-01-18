import "../styles/BasicColor.scss"
import "../styles/Introductory.scss"
import { Row, Col, Container } from 'react-bootstrap'

export default function Introductory() {

    return (
        <div className="introductory">
            <div className="introductory-top">
                The New <br/> Communicate tool
            </div>
            <div className="introductory-left">
                <p>我不知道</p>
            </div>
            <div className="introductory-middle">
                <p>我不知道</p>
            </div>
            <div className="introductory-right">
                <p>我不知道</p>
            </div>
        </div>
    )
}