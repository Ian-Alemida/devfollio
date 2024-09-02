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
    bottom: 6vh;
    padding-bottom: 21px;
    width: 54vw;
    height: 93vh;
    overflow: hidden;
    `
export const Container = styled.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`
export const MessageBubble = styled.div`
    margin-bottom: 9px;
    width: 100%;
    background-color: #fff;
`
export const MessageBubbleRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
`
export const MessageBubbleImage = styled.div`
    background-color: rosybrown;
    border-radius: 50%;
    width: 69px;
    height: 69px;
    flex: 0 0 69px;
`
export const MessageBubbleColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0 9px;
`
export const MessageBubbleName = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3px;
`
export const MessageBubbleContainer = styled.div`
    padding: 0;
    margin: 0;
`
export const UserMessage = styled.p`
`
export const ModelMessage = styled.div`
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