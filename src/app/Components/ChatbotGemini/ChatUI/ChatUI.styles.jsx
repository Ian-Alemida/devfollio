import { keyframes, styled } from 'styled-components'

// Animações
const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`
const closeDown = keyframes`
  from { transform: translateY(0);    opacity: 1; }
  to   { transform: translateY(20px); opacity: 0; }
`
const bounce = keyframes`
  0%, 60%, 100% { transform: translateY(0);    opacity: 0.4; }
  30%           { transform: translateY(-5px); opacity: 1;   }
`

// Painel principal
export const ChatModal = styled.div`
  width: 36vw;
  height: 85vh;
  background: #071222;
  border-radius: 16px;
  border: 1px solid rgba(85, 201, 246, 0.15);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(85, 201, 246, 0.05);
  display: ${({ $isClose }) => ($isClose ? 'none' : 'flex')};
  flex-direction: column;
  overflow: hidden;
  animation: ${({ $isClose }) => ($isClose ? closeDown : slideUp)} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;

  @media (max-width: 1024px) {
    display: none;
  }
`

// Header
export const HeaderChat = styled.div`
  background: linear-gradient(135deg, #0d2344 0%, #071222 100%);
  padding: 6px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(85, 201, 246, 0.1);
  flex-shrink: 0;
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const HeaderAvatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid var(--cor-principal);
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`
export const HeaderName = styled.p`
  color: var(--cor-principal);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0;
`
export const HeaderStatus = styled.p`
  color: #4a9ab5;
  font-size: 12px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
`
export const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  background: #22d479;
  border-radius: 50%;
  display: inline-block;
`
export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
  border-radius: 4px;
  line-height: 1;
  transition: color 0.2s;

  &:hover { color: #aaa; }
`

// Aviso de precisão
export const HeaderAttention = styled.p`
  font-size: 11px;
  color: #4a7a9b;
  text-align: center;
  padding: 3px 16px;
  border-bottom: 1px solid rgba(85, 201, 246, 0.05);
  margin: 0;
  letter-spacing: 0.2px;
  flex-shrink: 0;

  strong {
    color: #c05050;
    font-weight: 600;
  }
`

// Área de mensagens
export const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px 14px;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #1a3a6b; border-radius: 2px; }
`

// Bolha wrapper (alinha à esq ou dir)
export const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 88%;
  align-self: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
`
export const MessageBubbleName = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 0 4px;
  color: ${({ $role }) => ($role === 'user' ? 'var(--cor-secundaria)' : 'var(--cor-principal)')};
  text-align: ${({ $role }) => ($role === 'user' ? 'right' : 'left')};
`

// Conteúdo da bolha
export const ModelMessage = styled.div`
  background: #0d2344;
  color: #dde8f5;
  border-left: 2px solid var(--cor-principal);
  border-radius: 4px 12px 12px 12px;
  padding: 12px 16px;
  font-size: 15px;
  line-height: 1.55;
  word-break: break-word;

  li::before { content: '• '; }
`
export const UserMessage = styled.p`
  background: #0f2a50;
  color: #c8d8ee;
  border-right: 2px solid var(--cor-secundaria);
  border-radius: 12px 4px 12px 12px;
  padding: 12px 16px;
  font-size: 15px;
  line-height: 1.55;
  word-break: break-word;
  margin: 0;
`

// Indicador de digitando
export const TypingDots = styled.div`
  background: #0d2344;
  border-left: 2px solid var(--cor-principal);
  border-radius: 4px 12px 12px 12px;
  padding: 12px 16px;
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    width: 6px;
    height: 6px;
    background: var(--cor-principal);
    border-radius: 50%;
    animation: ${bounce} 1.2s infinite;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`

// Input
export const InputContainer = styled.div`
  padding: 10px 14px 14px;
  background: #050e1a;
  border-top: 1px solid rgba(85, 201, 246, 0.08);
  flex-shrink: 0;
`
export const InputComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0a1528;
  border: 1px solid rgba(85, 201, 246, 0.15);
  border-radius: 24px;
  padding: 6px 6px 6px 14px;
  transition: border-color 0.2s;

  &:focus-within { border-color: rgba(85, 201, 246, 0.4); }
`
export const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: #c8d8ee;
  font-size: 14px;

  &::placeholder { color: #3a5a7a; }
`
export const SendButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--cor-secundaria), var(--cor-principal));
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
  transition: opacity 0.2s, transform 0.1s;

  &:hover { opacity: 0.85; transform: scale(1.05); }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:disabled:hover { opacity: 0.4; transform: none; }
`

// ChatbotIcon (mantido do original — não alterado)
export const ContainerChatbotIconUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  z-index: 2;
`
export const ChatbotIconUI = styled.button`
  width: ${({ $isClose }) => ($isClose ? '75px' : '141px')};
  height: ${({ $isClose }) => ($isClose ? '75px' : '72px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: var(--cor-secundaria);
  background-image: linear-gradient(150deg, var(--cinza-medio), var(--cor-secundaria), var(--cinza-medio));
  cursor: pointer;
  padding-top: 3px;
  box-shadow: 0px 0px 39px 0px rgba(90, 90, 90, 150);
  position: relative;
  background-size: 300%;
  margin-bottom: 141px;
  background-position: left;
  transition-duration: 1s;

  span {
    position: absolute;
    top: ${({ $isClose }) => ($isClose ? '-40px' : '-57px')};
    opacity: 0;
    background-color: var(--cor-secundaria);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;
    pointer-events: none;
    letter-spacing: 0.5px;
  }
  &:hover span {
    opacity: 1;
    transition-duration: 0.5s;
  }
  &:hover {
    background-position: right;
    transition-duration: 1s;
    scale: ${({ $isClose }) => ($isClose ? 1.2 : 1.1)};
  }
`
