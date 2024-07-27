import { useState, useEffect } from 'react';
import { styled } from "styled-components";
import axios from 'axios';

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
    width: 96%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 18px;
    background-color: white;
`

const TextMessage = styled.p`
    margin: 0 1rem;
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

    const [messages, setMessages] = useState(['teste']);
    const [newMessage, setNewMessage] = useState('');
    console.log(newMessage)
    useEffect(() => {
        // Função para chamar a API
        const fetchGeminiResponse = async () => {
            try {
                const response = await axios.get('/api/getGemini');
                setMessages((prevMessages) => [response.data, ...prevMessages]);
            } catch (error) {
                console.error('Erro ao buscar a resposta do Gemini IA:', error);
            }
        };

        fetchGeminiResponse();
    }, []);
    return (
        <ChatModal>
            <InputContainer>
                <Input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Digite sua mensagem" />
                <SendButton>Send</SendButton>
            </InputContainer>
            <MessagesContainer>
                {messages.map((message, index) =>
                    <MessageBubble key={index}>
                        <TextMessage>{message}</TextMessage>
                    </MessageBubble>
                )}
            </MessagesContainer>
        </ChatModal>
    )
}