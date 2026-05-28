const { formatResponse } = require('../../geminiAI/formatResponse')

describe('formatResponse', () => {
  test('converte título H1', () => {
    expect(formatResponse('# Título')).toContain('<h1>Título</h1>')
  })

  test('converte título H2', () => {
    expect(formatResponse('## Subtítulo')).toContain('<h2>Subtítulo</h2>')
  })

  test('converte título H3', () => {
    expect(formatResponse('### Seção')).toContain('<h3>Seção</h3>')
  })

  test('converte negrito', () => {
    expect(formatResponse('**texto**')).toContain('<strong>texto</strong>')
  })

  test('converte itálico', () => {
    expect(formatResponse('*texto*')).toContain('<em>texto</em>')
  })

  test('converte código inline', () => {
    expect(formatResponse('`code`')).toContain('<code>code</code>')
  })

  test('converte item de lista único em <ul><li>', () => {
    const result = formatResponse('* item')
    expect(result).toContain('<ul>')
    expect(result).toContain('<li>item</li>')
  })

  test('múltiplos itens de lista ficam em um único <ul>', () => {
    const result = formatResponse('* a\n* b')
    const ulCount = (result.match(/<ul>/g) || []).length
    expect(ulCount).toBe(1)
    expect(result).toContain('<li>a</li>')
    expect(result).toContain('<li>b</li>')
  })

  test('envolve texto simples em <p>', () => {
    expect(formatResponse('texto comum')).toContain('<p>texto comum</p>')
  })

  test('string vazia retorna string vazia', () => {
    expect(formatResponse('')).toBe('')
  })
})
