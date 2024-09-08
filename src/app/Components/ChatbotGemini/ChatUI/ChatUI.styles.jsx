import { keyframes, styled } from "styled-components";

const openAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
const closeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;
export const ChatModal = styled.div`
    background-color: #dee6f2;
    color: black;
    animation: ${({ isOpen }) => (isOpen ? closeAnimation : openAnimation)} 0.78s ease;
    flex-direction: column-reverse;
    align-items: center; 
    z-index: 2;
    width: 45vw;
    height: 90vh;
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
    margin: 1.5vh 2.1vw 0 9px; 
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
    background-color: #afc0d8;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const InputComponent = styled.div`
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
    background-color: #afc0d8;
    position: absolute;
    top: 0;
    height: 42px;
    width: 45vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem 0 .9rem;
    border-bottom: 2.1px solid var(--cinza);
`
export const HeaderAttention = styled.p`
    color: #000;
    margin: 0;
    font-size: .9rem;

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
//ChatbotIcon
export const ContainerChatbotIconUI = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    z-index: 2;
    margin-bottom: 9vh;
`
export const ChatbotIconUI = styled.button`
    width: ${({ isClose }) => (isClose ? '75px' : '141px')};
    height: ${({ isClose }) => (isClose ? '75px' : '72px')};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background-color: var(--cor-secundaria);
    background-image: linear-gradient(150deg,  var(--cinza-medio), var(--cor-secundaria), var(--cinza-medio));
    cursor: pointer;
    padding-top: 3px;
    box-shadow: 0px 0px 39px 0px rgba(90, 90, 90, 150);
    position: relative;
    background-size: 300%;
    background-position: left;
    transition-duration: 1s;
    span {
        position: absolute;
        top: ${({ isClose }) => (isClose ? '-40px' : '-57px')};
        opacity: 0;
        background-color: var(--cor-secundaria);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: .5s;
        pointer-events: none;
        letter-spacing: 0.5px;
    }
    &:hover span {
        opacity: 1;
        transition-duration: .5s;
    }
    &:hover {
        background-position: right;
        transition-duration: 1s;
        scale: ${({ isClose }) => (isClose ? 1.2 : 1.1)};
    }
`
