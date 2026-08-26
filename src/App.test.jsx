import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppRoutes } from './App'

function renderRoute(path) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </HelmetProvider>,
  )
}

describe('LUMA routes', () => {
  it('renders the home hero and primary inquiry link', () => {
    renderRoute('/')
    expect(screen.getByRole('heading', { level: 1, name: /Beautifully orchestrated/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Plan Your Event/i }).length).toBeGreaterThan(0)
  })

  it('renders a direct service route with a meaningful heading', () => {
    renderRoute('/services/destination-weddings')
    expect(screen.getByRole('heading', { level: 1, name: 'Destination Wedding Planning' })).toBeInTheDocument()
    expect(screen.getByText(/multi-day timeline and transportation planning/i)).toBeInTheDocument()
  })

  it('validates the inquiry form before advancing', () => {
    renderRoute('/contact')
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }))
    expect(screen.getByText('Please enter your first name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('renders the custom not-found experience', () => {
    renderRoute('/missing-page')
    expect(screen.getByRole('heading', { level: 1, name: /bring you back to the celebration/i })).toBeInTheDocument()
  })
})
