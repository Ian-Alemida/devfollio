import { styled } from "styled-components";

export const ChatModal = styled.div`
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
    width: 720px;
    height: 860px;
    overflow: hidden;
    `
export const MessagesContainer = styled.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`
export const MessageBubble = styled.div`
    margin-bottom: 9px;
    width: 93%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const UserMessage = styled.p`
    padding: .3rem 1rem;
    margin: 0;
    background-color: blue;
`
export const ModelMessage = styled.div`
    padding: .3rem 1rem;
    background-color: white;
`

export const InputContainer = styled.div`
    width: 96%;
    display: flex;
    margin-top: 12px;
`
export const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: none;
    border-top: 1px solid #ccc;
    border-radius: 18px 0 0 18px;
    outline: none;
`

export const SendButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 0 18px 18px 0;
    background-color: var(--cor-secundaria);
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: var(--cor-principal);
    }
`