import { styled } from "styled-components";

export const ChatModal = styled.div`
    background-color: #dee6f2;
    color: black;
    flex-direction: column-reverse;
    align-items: center;  
    position: fixed;
    z-index: 2;
    right: 3vw;
    bottom: 6vh;
    width: 42vw;
    height: 87vh;
    overflow: hidden;
    display: ${({ isClose }) => (isClose ? 'none' : 'flex')};
    `
export const Container = styled.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 36px;
`
export const MessageBubble = styled.div`
    margin-bottom: 9px;
    width: 100%;
    background-color: #eee;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`
export const MessageBubbleRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
`
export const MessageBubbleImage = styled.div`
    border-radius: 50%;
    width: 75px;
    height: 75px;
    flex: 0 0 75px;
    margin: 12px 0 0 6px;
    img {
        border-radius: 50%;
    }
`
export const MessageBubbleColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 1.5vh 90px 0 9px; 
    text-align: justify;
`
export const MessageBubbleName = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 9px;
`
export const MessageBubbleContainer = styled.div`
    padding: 0;
    margin: 0;
    font-size: 1.26rem;
`
export const UserMessage = styled.p`
`
export const ModelMessage = styled.div`
li::before{
    content: '• '
}
`
// Barra de input
export const InputContainer = styled.div`
    background-color: #fff;
    border-radius: 33px;
    display: flex;
    padding: 9px;
    margin: 12px 0;
    width: 96%;
`
export const Input = styled.input`
    flex: 1;
    padding: 0 12px;
    border: none;
    outline: none;
`
export const SendButton = styled.button`
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background-color: var(--cor-secundaria);
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: var(--cor-principal);
        color: #aaa;
    }
`
// header
export const HeaderChat = styled.div`
    background-color: #dee6f2;
    position: absolute;
    top: 0;
    height: 42px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
`
export const HeaderAttention = styled.p`
    color: #000;
    margin: 0;

    strong{
        color: #fc1818;
        font-weight: bold;
    }
`
export const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
`