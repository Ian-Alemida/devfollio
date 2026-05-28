import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import ChatUI from '../../app/Components/ChatbotGemini/ChatUI/ChatUI'

jest.mock('axios')
jest.mock('dompurify', () => ({ sanitize: jest.fn((html) => html) }))
jest.mock('@/geminiAI/formatResponse', () => ({
  formatResponse: jest.fn((text) => `<p>${text}</p>`),
}))

const defaultProps = { isClose: false, setIsClose: jest.fn() }

describe('ChatUI', () => {
  beforeEach(() => jest.clearAllMocks())

  test('renderiza o nome da IA na mensagem inicial', () => {
    render(<ChatUI {...defaultProps} />)
    expect(screen.getByText(/IA´n Chatbot/i)).toBeInTheDocument()
  })

  test('input controlado atualiza o valor ao digitar', async () => {
    render(<ChatUI {...defaultProps} />)
    const input = screen.getByPlaceholderText(/Digite sua pergunta/i)
    await userEvent.type(input, 'Quem é Ian?')
    expect(input).toHaveValue('Quem é Ian?')
  })

  test('click em enviar chama axios.post com a pergunta do usuário', async () => {
    axios.post.mockResolvedValue({ data: 'Resposta da IA' })
    render(<ChatUI {...defaultProps} />)
    const input = screen.getByPlaceholderText(/Digite sua pergunta/i)
    await userEvent.type(input, 'Quem é Ian?')
    // SendButton é o primeiro button no DOM
    const buttons = screen.getAllByRole('button')
    await userEvent.click(buttons[0])
    expect(axios.post).toHaveBeenCalledWith('/api/getGemini', { userQuestion: 'Quem é Ian?' })
  })

  test('resposta da API adiciona nova mensagem no histórico', async () => {
    axios.post.mockResolvedValue({ data: 'Ian é fullstack' })
    render(<ChatUI {...defaultProps} />)
    await userEvent.type(screen.getByPlaceholderText(/Digite sua pergunta/i), 'Quem é Ian?')
    await userEvent.click(screen.getAllByRole('button')[0])
    await waitFor(() => {
      expect(screen.getByText(/- User/)).toBeInTheDocument()
    })
    expect(screen.getAllByText(/IA´n Chatbot/i).length).toBeGreaterThanOrEqual(1)
  })

  test('pressionar Enter envia a mensagem', async () => {
    axios.post.mockResolvedValue({ data: 'resposta' })
    render(<ChatUI {...defaultProps} />)
    const input = screen.getByPlaceholderText(/Digite sua pergunta/i)
    await userEvent.type(input, 'Pergunta via Enter')
    await userEvent.keyboard('{Enter}')
    expect(axios.post).toHaveBeenCalledWith('/api/getGemini', { userQuestion: 'Pergunta via Enter' })
  })

  test('erro na API chama console.error e não quebra a UI', async () => {
    axios.post.mockRejectedValue(new Error('Network error'))
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    render(<ChatUI {...defaultProps} />)
    await userEvent.type(screen.getByPlaceholderText(/Digite sua pergunta/i), 'Pergunta')
    await userEvent.click(screen.getAllByRole('button')[0])
    await waitFor(() => expect(consoleSpy).toHaveBeenCalled())
    expect(screen.getByPlaceholderText(/Digite sua pergunta/i)).toBeInTheDocument()
    consoleSpy.mockRestore()
  })

  test('input é limpo após o envio', async () => {
    axios.post.mockResolvedValue({ data: 'resposta' })
    render(<ChatUI {...defaultProps} />)
    const input = screen.getByPlaceholderText(/Digite sua pergunta/i)
    await userEvent.type(input, 'Quem é Ian?')
    await userEvent.click(screen.getAllByRole('button')[0])
    expect(input).toHaveValue('')
  })
})
