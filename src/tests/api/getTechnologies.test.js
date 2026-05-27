/**
 * @jest-environment node
 */

jest.mock('@/db/db.js', () => ({ connectDB: jest.fn() }))
jest.mock('@/db/schemas/technologiesSchema', () => ({
  __esModule: true,
  default: { find: jest.fn() },
}))

const tecnologiasSchema = require('@/db/schemas/technologiesSchema').default

let getTechnologies
beforeAll(async () => {
  const mod = await import('../../../pages/api/getTechnologies.js')
  getTechnologies = mod.default
})

const mockRes = () => {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('GET /api/getTechnologies', () => {
  beforeEach(() => jest.clearAllMocks())

  test('200 com array de tecnologias do banco', async () => {
    const techMock = [
      { _id: '1', nome: 'React', img: '/react.svg', text: 'Biblioteca JS' },
      { _id: '2', nome: 'Node.js', img: '/node.svg', text: 'Runtime JS' },
    ]
    tecnologiasSchema.find.mockResolvedValue(techMock)

    const res = mockRes()
    await getTechnologies({}, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(techMock)
  })

  test('500 quando o banco lança exceção', async () => {
    tecnologiasSchema.find.mockRejectedValue(new Error('DB error'))
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const res = mockRes()
    await getTechnologies({}, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: 'Erro interno do servidor' })
    consoleSpy.mockRestore()
  })
})
