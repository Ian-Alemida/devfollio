import { useState, useEffect } from 'react';
import { styled } from "styled-components";
import axios from 'axios';
import { formatResponse } from '@/geminiAI/formatResponse';

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
    width: 720px;
    height: 860px;
    overflow: hidden;
    `
const MessagesContainer = styled.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`
const MessageBubble = styled.div`
    margin-bottom: 9px;
    width: 93%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const UserMessage = styled.p`
    padding: .3rem 1rem;
    margin: 0;
    background-color: red;
`
const ModelMessage = styled.div`
    padding: .3rem 1rem;
    background-color: white;
`

const InputContainer = styled.div`
    width: 96%;
    display: flex;
    margin-top: 12px;
`
const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: none;
    border-top: 1px solid #ccc;
    border-radius: 18px 0 0 18px;
    outline: none;
`

const SendButton = styled.button`
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

export default function ChatUI() {

    const [messages, setMessages] = useState([{ role: 'model', message: "Olá! Eu sou IA'n, a Inteligência Artificial do Ian Almeida, um desenvolvedor full-stack com vasta experiência em diversas áreas de tecnologia. Fui criado para responder suas perguntas e te auxiliar a entender melhor as qualificações e experiências do Ian. Precisa de alguma informação específica sobre ele? Você pode me perguntar coisas como: * Quais as tecnologias que o Ian domina? * Quais projetos ele já desenvolveu? * experiencias de trabalho do Ian? * Como posso entrar em contato com o Ian? Estou aqui para te ajudar a descobrir se o Ian é a pessoa certa para o seu projeto!" },]);
    const [newMessage, setNewMessage] = useState('');

    async function clickSendMessage() { //  configura o comportamento do componente após o usuário clicar no botão de enviar a mensagem
        setMessages([{ role: 'user', message: newMessage }, ...messages]);
        try {
            const response = await axios.post('/api/getGemini', { userQuestion: newMessage }); // faz o POST utilizando o axios, passando para ele a variável que armazena a pergunta do usuário
            setMessages((prevMessages) => [{ role: 'model', message: formatResponse(response.data) }, ...prevMessages]);
        } catch (error) {
            console.error('Erro ao buscar a resposta do Gemini IA:', error);
        }
        setNewMessage('');
    };

    return (
        <ChatModal>
            <InputContainer>
                <Input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Digite sua pergunta..." />
                <SendButton onClick={clickSendMessage}>Send</SendButton>
            </InputContainer>
            <MessagesContainer>
                {messages.map((message, index) =>
                    <MessageBubble key={index} >
                        {message.role === 'model' ? <ModelMessage dangerouslySetInnerHTML={{ __html: message.message }}></ModelMessage> : <UserMessage>{message.message}</UserMessage>}
                    </MessageBubble>
                )}
            </MessagesContainer>
        </ChatModal>
    )
}