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
  it('renders the home hero and primary inquiry link', async () => {
    renderRoute('/')
    expect(await screen.findByRole('heading', { level: 1, name: /Beautifully orchestrated/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Plan Your Event/i }).length).toBeGreaterThan(0)
  })

  it('renders a direct service route with a meaningful heading', async () => {
    renderRoute('/services/destination-weddings')
    expect(await screen.findByRole('heading', { level: 1, name: 'Destination Wedding Planning' })).toBeInTheDocument()
    expect(screen.getByText(/multi-day timeline and transportation planning/i)).toBeInTheDocument()
  })

  it('validates the inquiry form before advancing', async () => {
    renderRoute('/contact')
    fireEvent.click(await screen.findByRole('button', { name: /Continue/i }))
    expect(screen.getByText('Please enter your first name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('renders an expanded industry route', async () => {
    renderRoute('/events/conferences')
    expect(await screen.findByRole('heading', { level: 1, name: 'Conferences & Summits' })).toBeInTheDocument()
    expect(screen.getAllByText(/Speaker, audience, room and production/i).length).toBeGreaterThan(0)
  })

  it('renders the searchable gallery', async () => {
    renderRoute('/gallery')
    expect(await screen.findByRole('searchbox', { name: /Search gallery/i })).toBeInTheDocument()
    expect(screen.getByText(/Showing 12 of 70 images/i)).toBeInTheDocument()
  })

  it('renders the custom not-found experience', async () => {
    renderRoute('/missing-page')
    expect(await screen.findByRole('heading', { level: 1, name: /bring you back to the celebration/i })).toBeInTheDocument()
  })
})
