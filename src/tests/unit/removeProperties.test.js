const removeProperties = require('../../geminiAI/removeProperties')

describe('removeProperties', () => {
  test('remove _id, img e link do objeto', () => {
    const result = removeProperties([
      { _id: '123', img: 'img.png', link: 'http://x.com', nome: 'React' },
    ])
    expect(result[0]).not.toHaveProperty('_id')
    expect(result[0]).not.toHaveProperty('img')
    expect(result[0]).not.toHaveProperty('link')
  })

  test('preserva as demais propriedades intactas', () => {
    const result = removeProperties([
      { _id: '1', img: 'x', link: 'y', nome: 'React', text: 'desc', skill: 'Front-end' },
    ])
    expect(result[0]).toEqual({ nome: 'React', text: 'desc', skill: 'Front-end' })
  })

  test('array vazio retorna array vazio', () => {
    expect(removeProperties([])).toEqual([])
  })

  test('processa múltiplos itens corretamente', () => {
    const input = [
      { _id: '1', img: 'a.png', nome: 'React' },
      { _id: '2', img: 'b.png', nome: 'Node' },
    ]
    const result = removeProperties(input)
    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({ nome: 'React' })
    expect(result[1]).toEqual({ nome: 'Node' })
  })

  test('item sem as props removidas não quebra', () => {
    const result = removeProperties([{ nome: 'X', text: 'Y' }])
    expect(result[0]).toEqual({ nome: 'X', text: 'Y' })
  })
})
