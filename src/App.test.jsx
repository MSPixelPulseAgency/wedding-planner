import { fireEvent, render, screen, within } from '@testing-library/react'
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
    expect(screen.getByRole('combobox', { name: /Search weddings, events, services and inspiration/i })).toBeInTheDocument()
  })

  it('groups discovery routes inside the Explore navigation menu', async () => {
    renderRoute('/')
    fireEvent.click(await screen.findByRole('button', { name: /^Explore$/i }))
    const exploreMenu = document.getElementById('mega-explore')
    expect(within(exploreMenu).getAllByRole('link', { name: /Portfolio/i }).length).toBeGreaterThan(0)
    expect(within(exploreMenu).getAllByRole('link', { name: /Videos|motion/i }).length).toBeGreaterThan(0)
    expect(within(exploreMenu).getByRole('link', { name: /Reviews/i })).toBeInTheDocument()
    expect(within(exploreMenu).getByRole('link', { name: /FAQ/i })).toBeInTheDocument()
  })

  it('navigates to a real route from keyboard search suggestions', async () => {
    renderRoute('/')
    const search = await screen.findByRole('combobox', { name: /Search weddings, events, services and inspiration/i })
    fireEvent.change(search, { target: { value: 'South Asian Wedding' } })
    expect(await screen.findByRole('option', { name: /South Asian Weddings/i })).toBeInTheDocument()
    fireEvent.keyDown(search, { key: 'ArrowDown' })
    fireEvent.keyDown(search, { key: 'Enter' })
    expect(await screen.findByRole('heading', { level: 1, name: 'South Asian Weddings' })).toBeInTheDocument()
  })

  it('defers official YouTube players until a visitor requests one', async () => {
    renderRoute('/')
    expect(document.querySelector('iframe')).not.toBeInTheDocument()
    fireEvent.click(await screen.findByRole('button', { name: /Load Toronto 100% from Destination Toronto/i }))
    expect(await screen.findByTitle(/Toronto 100% — Destination Toronto/i)).toBeInTheDocument()
  })

  it('renders a direct service route with a meaningful heading', async () => {
    renderRoute('/services/destination-weddings')
    expect(await screen.findByRole('heading', { level: 1, name: 'Destination Wedding Planning' })).toBeInTheDocument()
    expect(screen.getByText(/multi-day timeline and transportation planning/i)).toBeInTheDocument()
  })

  it('validates the inquiry form before advancing', async () => {
    renderRoute('/contact')
    expect((await screen.findAllByRole('link', { name: /\+1 365-883-0338/i })).length).toBeGreaterThan(0)
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
