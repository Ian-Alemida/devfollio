import { FaTimes } from "react-icons/fa";
import { ChatbotIconUI, ContainerChatbotIconUI } from "../ChatUI.styles";

export default function ChatbotIcon() {
    return (
        <ContainerChatbotIconUI>
            <ChatbotIconUI>
                <img src="./chatbot.png" alt="" />
                <span>IA´n</span>
            </ChatbotIconUI>
        </ContainerChatbotIconUI>
    )
}