/**
 * @jest-environment node
 */

jest.mock('@/db/db.js', () => ({ connectDB: jest.fn() }))
jest.mock('@/db/schemas/cursosSchema', () => ({
  __esModule: true,
  default: { find: jest.fn() },
}))

const cursosSchema = require('@/db/schemas/cursosSchema').default

let getCourses
beforeAll(async () => {
  const mod = await import('../../../pages/api/getCourses.js')
  getCourses = mod.default
})

const mockRes = () => {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('GET /api/getCourses', () => {
  beforeEach(() => jest.clearAllMocks())

  test('200 com array de cursos do banco', async () => {
    const cursosMock = [
      { _id: '1', nome: 'React', skill: 'Front-end' },
      { _id: '2', nome: 'Node', skill: 'Back-end' },
    ]
    cursosSchema.find.mockResolvedValue(cursosMock)

    const res = mockRes()
    await getCourses({ method: 'GET' }, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(cursosMock)
  })

  test('500 quando o banco lança exceção', async () => {
    cursosSchema.find.mockRejectedValue(new Error('DB error'))
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const res = mockRes()
    await getCourses({ method: 'GET' }, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: 'Erro interno do servidor' })
    consoleSpy.mockRestore()
  })
})
