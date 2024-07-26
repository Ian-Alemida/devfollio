import { useState, useEffect } from 'react';
import { styled } from "styled-components"

const ChatModal = styled.div`
    background-color: var(--cinza-medio);
    color: black;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;  
    position: fixed;
    z-index: 2;
    right: 3vw;
    bottom: 12vh;
    padding-bottom: 21px;
    width: 520px;
    height: 660px;
`

const MessageBubble = styled.div`
    width: 90%;
    height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 18px;
    background-color: white;
`

const TextMessage = styled.p`
    margin: 0 1rem;

`

export default function ChatUI() {
    return (
        <ChatModal>
            <MessageBubble>
                <TextMessage>hello</TextMessage>
            </MessageBubble>
        </ChatModal>
    )
}