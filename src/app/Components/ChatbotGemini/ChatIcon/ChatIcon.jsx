import { ChatbotIconUI, ContainerChatbotIconUI } from "../ChatUI/ChatUI.styles";

export default function ChatIcon({ isClose, setIsClose }) {
    return (
        <ContainerChatbotIconUI>
            <ChatbotIconUI isClose={isClose} onClick={() => setIsClose(!isClose)}>
                <img src="./chatbot.png" alt="" />
                <span>IA´n</span>
            </ChatbotIconUI>
        </ContainerChatbotIconUI>
    )
}