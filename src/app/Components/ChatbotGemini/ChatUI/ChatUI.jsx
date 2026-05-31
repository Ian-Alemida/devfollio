'use client';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { formatResponse } from '@/geminiAI/formatResponse';
import {
  ChatModal,
  CloseButton,
  Container,
  HeaderAttention,
  HeaderAvatar,
  HeaderChat,
  HeaderInfo,
  HeaderLeft,
  HeaderName,
  HeaderStatus,
  Input,
  InputComponent,
  InputContainer,
  MessageBubble,
  MessageBubbleName,
  ModelMessage,
  SendButton,
  StatusDot,
  TypingDots,
  UserMessage,
} from './ChatUI.styles';
import { FaArrowUp, FaTimes } from 'react-icons/fa';

export default function ChatUI({ isClose, setIsClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'model',
      message:
        "<p>Olá! Sou <strong>IA'n</strong>, a inteligência artificial criada para te ajudar a conhecer melhor o Ian Almeida, um desenvolvedor full-stack cheio de talento e paixão pela tecnologia. 😊</p><p>Imagine-me como seu guia pessoal nesse mundo digital! Estou aqui para:</p> <ul> <li><strong>Responder às suas perguntas:</strong> Se você tem curiosidade sobre a trajetória do Ian, as tecnologias que ele domina, seus projetos ou experiências, eu estou aqui para te ajudar!</li> <li><strong>Apresentar o melhor do Ian:</strong> Vou te mostrar o que o torna um profissional especial, com uma linguagem clara e organizada.</li><li><strong>Facilitar a sua decisão:</strong> Se você procura um desenvolvedor criativo, comprometido e com um amplo conhecimento técnico, o Ian é uma excelente opção!</li> </ul> <p>Então, me diga, o que te interessa saber sobre o Ian?</p>",
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isClose && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isClose]);

  async function clickSendMessage() {
    const userMessage = newMessage.trim();
    if (!userMessage || isLoading) return;
    setNewMessage('');
    setMessages((prev) => [{ role: 'user', message: userMessage }, ...prev]);
    setIsLoading(true);
    try {
      const response = await axios.post('/api/getGemini', { userQuestion: userMessage });
      setMessages((prev) => [
        { role: 'model', message: formatResponse(response.data) },
        ...prev,
      ]);
    } catch (error) {
      console.error('Erro ao buscar a resposta do Gemini IA:', error);
      setMessages((prev) => [
        { role: 'model', message: 'Desculpe, ocorreu um erro ao processar sua pergunta. Tente novamente.' },
        ...prev,
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ChatModal $isClose={isClose}>
      <HeaderChat>
        <HeaderLeft>
          <HeaderAvatar>
            <img src="/IA.jpg" alt="Avatar IA'n" />
          </HeaderAvatar>
          <HeaderInfo>
            <HeaderName>IA&apos;n</HeaderName>
            <HeaderStatus>
              <StatusDot />
              online
            </HeaderStatus>
          </HeaderInfo>
        </HeaderLeft>
        <CloseButton onClick={() => setIsClose(!isClose)}>
          <FaTimes fontSize={16} />
        </CloseButton>
      </HeaderChat>

      <HeaderAttention>
        <strong>Atenção:</strong> as respostas da IA podem não ser 100% precisas — confira no portfólio.
      </HeaderAttention>

      <Container>
        {isLoading && (
          <MessageBubble $role="model">
            <MessageBubbleName $role="model">IA&apos;n</MessageBubbleName>
            <TypingDots>
              <span />
              <span />
              <span />
            </TypingDots>
          </MessageBubble>
        )}
        {messages.map((message, index) => (
          <MessageBubble key={index} $role={message.role}>
            <MessageBubbleName $role={message.role}>
              {message.role === 'model' ? "IA’n" : 'Você'}
            </MessageBubbleName>
            {message.role === 'model' ? (
              <ModelMessage
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message.message) }}
              />
            ) : (
              <UserMessage>{message.message}</UserMessage>
            )}
          </MessageBubble>
        ))}
      </Container>

      <InputContainer>
        <InputComponent>
          <Input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') clickSendMessage(); }}
            placeholder="Digite sua pergunta..."
          />
          <SendButton onClick={clickSendMessage} disabled={isLoading}>
            <FaArrowUp fontSize={18} />
          </SendButton>
        </InputComponent>
      </InputContainer>
    </ChatModal>
  );
}
