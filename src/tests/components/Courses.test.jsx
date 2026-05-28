import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import Courses from '../../app/Components/Courses/Courses'

jest.mock('axios')
jest.mock('../../app/fonts', () => ({
  roboto: { className: 'mock-roboto' },
  ubuntu: { className: 'mock-ubuntu' },
  merriweather: { className: 'mock-merriweather' },
}))
jest.mock('../../app/Components/Courses/Cards/CardCourses', () =>
  function MockCardCourses({ nome }) { return <div data-testid="card-courses">{nome}</div> }
)
jest.mock('../../app/Components/Courses/Cards/CardTecnologo', () =>
  function MockCardTecnologo({ nome }) { return <div data-testid="card-tecnologo">{nome}</div> }
)
jest.mock('../../app/Components/Courses/Cards/CardBooks', () =>
  function MockCardBooks({ nome }) { return <div data-testid="card-books">{nome}</div> }
)
jest.mock('../../app/Components/Courses/Skills/HardSkills', () => () => <div />)
jest.mock('../../app/Components/Courses/Skills/SoftSkills', () => () => <div />)
jest.mock('../../app/Components/Courses/Skills/Idiomas', () => () => <div />)

const mockCursos = [
  { _id: '1', nome: 'React Avançado', skill: 'Front-end', link: '', plataform: 'Alura', time: '20h' },
  { _id: '2', nome: 'Node.js', skill: 'Back-end', link: '', plataform: 'Udemy', time: '15h' },
  { _id: '3', nome: 'Engenharia', skill: 'Faculdade', link: '', plataform: 'UFMG', time: '4 anos', type: 'Graduação' },
  { _id: '4', nome: 'Clean Code', skill: 'Livros', img: '/cleancode.jpg' },
]

describe('Courses', () => {
  beforeEach(() => jest.clearAllMocks())

  test('chama axios.get com a URL correta no mount', async () => {
    axios.get.mockResolvedValue({ data: mockCursos })
    render(<Courses />)
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('/api/getCourses')
    })
  })

  test('filtro inicial é Front-end — exibe apenas cursos dessa categoria', async () => {
    axios.get.mockResolvedValue({ data: mockCursos })
    render(<Courses />)
    await waitFor(() => expect(screen.getByText('React Avançado')).toBeInTheDocument())
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument()
  })

  test('click em Back-end filtra e exibe apenas cursos dessa categoria', async () => {
    axios.get.mockResolvedValue({ data: mockCursos })
    render(<Courses />)
    await waitFor(() => expect(axios.get).toHaveBeenCalled())
    await userEvent.click(screen.getByRole('button', { name: 'Back-end' }))
    await waitFor(() => expect(screen.getByText('Node.js')).toBeInTheDocument())
    expect(screen.queryByText('React Avançado')).not.toBeInTheDocument()
  })

  test('categoria Faculdade renderiza CardTecnologo', async () => {
    axios.get.mockResolvedValue({ data: mockCursos })
    render(<Courses />)
    await waitFor(() => expect(axios.get).toHaveBeenCalled())
    await userEvent.click(screen.getByRole('button', { name: 'Faculdade' }))
    await waitFor(() => expect(screen.getByTestId('card-tecnologo')).toBeInTheDocument())
  })

  test('categoria Livros renderiza CardBooks', async () => {
    axios.get.mockResolvedValue({ data: mockCursos })
    render(<Courses />)
    await waitFor(() => expect(axios.get).toHaveBeenCalled())
    await userEvent.click(screen.getByRole('button', { name: 'Livros' }))
    await waitFor(() => expect(screen.getByTestId('card-books')).toBeInTheDocument())
  })

  test('exibe skeletons enquanto os dados carregam', () => {
    axios.get.mockImplementation(() => new Promise(() => {})) // nunca resolve
    render(<Courses />)
    expect(screen.getAllByTestId('skeleton-courses')).toHaveLength(8)
    expect(screen.queryByTestId('card-courses')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Front-end' })).toBeInTheDocument()
  })

  test('erro na API: exibe mensagem de erro e não renderiza cards', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    axios.get.mockRejectedValue(new Error('Network error'))
    render(<Courses />)
    await waitFor(() => {
      expect(screen.getByText('Não foi possível carregar os cursos.')).toBeInTheDocument()
    })
    expect(screen.queryByTestId('card-courses')).not.toBeInTheDocument()
    consoleSpy.mockRestore()
  })
})
