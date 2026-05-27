import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ScrollUp from '../../app/Components/ScrollUp/ScrollUp'

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 })
  window.scrollTo = jest.fn()
})

describe('ScrollUp', () => {
  test('botão começa com classe visible (estado inicial oculto)', () => {
    render(<ScrollUp />)
    expect(screen.getByRole('button')).toHaveClass('visible')
  })

  test('scroll para baixo mantém a classe visible no botão', () => {
    render(<ScrollUp />)
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 200 })
    act(() => { window.dispatchEvent(new Event('scroll')) })
    expect(screen.getByRole('button')).toHaveClass('visible')
  })

  test('scroll para cima remove a classe visible do botão', () => {
    render(<ScrollUp />)
    // Primeiro scroll para baixo (define prevScrollYRef.current = 200)
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 200 })
    act(() => { window.dispatchEvent(new Event('scroll')) })
    // Segundo scroll para cima (scrollY < 200)
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 100 })
    act(() => { window.dispatchEvent(new Event('scroll')) })
    expect(screen.getByRole('button')).not.toHaveClass('visible')
  })

  test('click no botão chama window.scrollTo com top:0', async () => {
    render(<ScrollUp />)
    await userEvent.click(screen.getByRole('button'))
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  test('removeEventListener é chamado ao desmontar', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ScrollUp />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })
})
