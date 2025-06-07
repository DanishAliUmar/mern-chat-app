import React, { useEffect } from 'react'
import axios from 'axios'

const ChatPage = () => {

    const featchChat = async () => {
        const data = await axios.get("/api/chat/")
        console.log(data);

    }

    useEffect(() => {
        featchChat()
    }, [])
    return (
        <div>ChatPage</div>
    )
}

export default ChatPage