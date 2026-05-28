/**
 * @jest-environment node
 */

jest.mock('@/geminiAI/startGemini', () => ({
  getChat: jest.fn(),
}))

const { getChat } = require('@/geminiAI/startGemini')

let getGemini
beforeAll(async () => {
  const mod = await import('../../../pages/api/getGemini.js')
  getGemini = mod.default
})

const mockReq = (body = {}, method = 'POST') => ({ body, method })
const mockRes = () => {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('POST /api/getGemini', () => {
  beforeEach(() => jest.clearAllMocks())

  test('400 quando userQuestion está ausente', async () => {
    const res = mockRes()
    await getGemini(mockReq({}), res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'Pergunta inválida' })
  })

  test('400 quando userQuestion não é string', async () => {
    const res = mockRes()
    await getGemini(mockReq({ userQuestion: 123 }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('400 quando userQuestion tem mais de 2000 caracteres', async () => {
    const res = mockRes()
    await getGemini(mockReq({ userQuestion: 'a'.repeat(2001) }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('200 com resposta válida do Gemini', async () => {
    const mockText = jest.fn().mockResolvedValue('resposta da IA')
    // result.response é awaited com "await result.response", logo pode ser
    // um valor direto (objeto com text()) ou uma Promise que resolve para isso.
    // A API faz: const response = await result.response
    // Portanto result.response precisa ser um objeto com text() (ou Promise disso).
    const mockResponse = { text: mockText }
    const mockResult = { response: mockResponse }
    const mockChat = { sendMessage: jest.fn().mockResolvedValue(mockResult) }
    getChat.mockResolvedValue(mockChat)

    const res = mockRes()
    await getGemini(mockReq({ userQuestion: 'Quem é Ian?' }), res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith('resposta da IA')
  })

  test('500 quando Gemini lança exceção', async () => {
    getChat.mockRejectedValue(new Error('Gemini offline'))
    const res = mockRes()
    await getGemini(mockReq({ userQuestion: 'Quem é Ian?' }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: 'Falha ao gerar resposta' })
  })

  test('405 para requisições não-POST', async () => {
    const res = mockRes()
    await getGemini(mockReq({}, 'GET'), res)
    expect(res.status).toHaveBeenCalledWith(405)
  })
})
