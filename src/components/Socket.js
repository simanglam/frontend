import { io } from "socket.io-client"

const socket = new io("/", { withCredentials: true, credentials: "cookie" })
export default socket