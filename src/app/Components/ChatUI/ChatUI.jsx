import { useState } from 'react';
import axios from 'axios';
import { formatResponse } from '@/geminiAI/formatResponse';
import { ChatModal, CloseButton, Container, HeaderChat, Input, InputContainer, MessageBubble, MessageBubbleColumn, MessageBubbleContainer, MessageBubbleImage, MessageBubbleName, MessageBubbleRow, ModelMessage, SendButton, UserMessage } from './ChatUI.styles';
import { FaArrowUp, FaTimes } from 'react-icons/fa'

export default function ChatUI() {

    const [messages, setMessages] = useState([{ role: 'model', message: "<p>Olá! Sou <strong>IA'n</strong>, a inteligência artificial criada para te ajudar a conhecer melhor o Ian Almeida, um desenvolvedor full-stack cheio de talento e paixão pela tecnologia. 😊</p><p>Imagine-me como seu guia pessoal nesse mundo digital! Estou aqui para:</p> <ul> <li><strong>Responder às suas perguntas:</strong> Se você tem curiosidade sobre a trajetória do Ian, as tecnologias que ele domina, seus projetos ou experiências, eu estou aqui para te ajudar!</li> <li><strong>Apresentar o melhor do Ian:</strong> Vou te mostrar o que o torna um profissional especial, com uma linguagem clara e organizada.</li><li><strong>Facilitar a sua decisão:</strong> Se você procura um desenvolvedor criativo, comprometido e com um amplo conhecimento técnico, o Ian é uma excelente opção!</li> </ul> <p>Então, me diga, o que te interessa saber sobre o Ian?</p>" },]);
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
                <SendButton onClick={clickSendMessage}><FaArrowUp fontSize={21} /></SendButton>
            </InputContainer>
            <Container>
                {messages.map((message, index) =>
                    <MessageBubble key={index} >
                        <MessageBubbleRow>
                            <MessageBubbleImage>{message.role === 'model' ? <img src="/IA.jpg" alt='icone da IA' /> : <img src="/userIcon.webp" alt='icone da IA' />}</MessageBubbleImage>
                            <MessageBubbleColumn>
                                <MessageBubbleName>{message.role === 'model' ? '- IA´n Chatbot' : '- User'}</MessageBubbleName>
                                <MessageBubbleContainer>
                                    {message.role === 'model' ? <ModelMessage dangerouslySetInnerHTML={{ __html: message.message }}></ModelMessage> : <UserMessage>{message.message}</UserMessage>}
                                </MessageBubbleContainer>
                            </MessageBubbleColumn>
                        </MessageBubbleRow>
                    </MessageBubble>
                )}
            </Container>
            <HeaderChat>
                <CloseButton><FaTimes fontSize={21} fontWeight={1} color='red' /></CloseButton>
            </HeaderChat>
        </ChatModal>
    )
}