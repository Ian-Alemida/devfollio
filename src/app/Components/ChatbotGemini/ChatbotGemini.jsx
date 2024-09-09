import styled from "styled-components";
import ChatUI from "./ChatUI/ChatUI";
import ChatIcon from "./ChatIcon/ChatIcon";
import { useState } from "react";

const ContainerChatbotGemini = styled.div`
    display: flex;
    gap: 12px;
    align-items: end;
    position: fixed;
    right: 1.2vw;
    bottom: 7.2vh;
    z-index: 2;

    @media (max-width: 1024px) {
        display: none;
  }
`

export default function ChatbotGemini() {

    const [isClose, setIsClose] = useState(true);

    return (
        <ContainerChatbotGemini>
            <ChatUI isClose={isClose} setIsClose={setIsClose} />
            <ChatIcon isClose={isClose} setIsClose={setIsClose}></ChatIcon>
        </ContainerChatbotGemini>
    )
}