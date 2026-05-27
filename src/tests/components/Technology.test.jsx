import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import Technology from '../../app/Components/Technology/Technology'

jest.mock('axios')
jest.mock('../../app/fonts', () => ({
  roboto: { className: 'mock-roboto' },
}))
jest.mock('../../app/Components/Technology/CardTechnology/CardTechnology', () =>
  function MockCardTechnology({ h3 }) {
    return <div data-testid="card-technology">{h3}</div>
  }
)

const mockTecnologias = [
  { _id: '1', nome: 'React', img: '/react.svg', text: 'Biblioteca JS' },
  { _id: '2', nome: 'Next.js', img: '/next.svg', text: 'Framework React' },
]

describe('Technology', () => {
  beforeEach(() => jest.clearAllMocks())

  test('chama axios.get com a URL correta no mount', async () => {
    axios.get.mockResolvedValue({ data: mockTecnologias })
    render(<Technology />)
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('/api/getTechnologies')
    })
  })

  test('renderiza um card por tecnologia retornada', async () => {
    axios.get.mockResolvedValue({ data: mockTecnologias })
    render(<Technology />)
    await waitFor(() => {
      expect(screen.getAllByTestId('card-technology')).toHaveLength(2)
    })
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })

  test('erro na API mantém a lista vazia e chama console.error', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    axios.get.mockRejectedValue(new Error('Network error'))
    render(<Technology />)
    await waitFor(() => expect(consoleSpy).toHaveBeenCalled())
    expect(screen.queryByTestId('card-technology')).not.toBeInTheDocument()
    consoleSpy.mockRestore()
  })
})
