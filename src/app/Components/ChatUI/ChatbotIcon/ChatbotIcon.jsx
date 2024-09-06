import { FaTimes } from "react-icons/fa";
import { ChatbotIconUI, ContainerChatbotIconUI } from "../ChatUI.styles";

export default function ChatbotIcon() {
    return (
        <ContainerChatbotIconUI>
            <ChatbotIconUI>
                <FaTimes fontSize={21} fontWeight={1} color='red' />
                <span>Chat</span>
            </ChatbotIconUI>
        </ContainerChatbotIconUI>
    )
}