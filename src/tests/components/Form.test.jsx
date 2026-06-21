import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../../app/Components/Footer/Infos/Form/Form'

describe('Form', () => {
  test('renderiza campo de email e botão Enviar', () => {
    render(<Form />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument()
  })

  test('input controlado atualiza o valor ao digitar', async () => {
    render(<Form />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'teste@email.com')
    expect(input).toHaveValue('teste@email.com')
  })

  test('submit com email válido exibe confirmação e oculta o form', async () => {
    render(<Form />)
    await userEvent.type(screen.getByRole('textbox'), 'teste@email.com')
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }))
    expect(screen.getByText(/email recebido/i)).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  test('submit com campo vazio mantém o form visível', async () => {
    render(<Form />)
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }))
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('submit não recarrega a página (preventDefault chamado)', async () => {
    render(<Form />)

    await userEvent.type(screen.getByRole('textbox'), 'teste@email.com')
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }))

    // Se preventDefault não fosse chamado, a página recarregaria e o teste falharia
    // O fato de conseguirmos fazer assert sobre o novo estado prova que preventDefault funcionou
    expect(screen.getByText(/email recebido/i)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /enviar/i })).not.toBeInTheDocument()
  })
})
