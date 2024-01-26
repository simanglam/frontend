import { io } from "socket.io-client"

const socket = new io("http://localhost:4000", { withCredentials: true, credentials: "cookie" })
export default socket