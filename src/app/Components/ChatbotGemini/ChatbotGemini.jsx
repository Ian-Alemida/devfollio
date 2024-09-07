import styled from "styled-components";
import ChatUI from "./ChatUI/ChatUI";
import ChatIcon from "./ChatIcon/ChatIcon";

const ContainerChatbotGemini = styled.div`
`
export default function ChatbotGemini() {
    return (
        <ContainerChatbotGemini>
            <ChatUI />
            <ChatIcon></ChatIcon>
        </ContainerChatbotGemini>
    )
}