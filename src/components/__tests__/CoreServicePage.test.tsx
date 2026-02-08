import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { CoreServicePage } from '../CoreServicePage'
import { describe, expect, it, vi } from 'vitest'

describe('CoreServicePage', () => {
  it('submits the service form and shows success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve({ ok: true }) })
    // @ts-expect-error override fetch for test
    global.fetch = fetchMock

    render(
      <MemoryRouter initialEntries={["/services/emergency-orm"]}>
        <Routes>
          <Route path="/services/:slug" element={<CoreServicePage language="en" />} />
        </Routes>
      </MemoryRouter>
    )

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test User' } })
    fireEvent.change(screen.getByLabelText(/Work email/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Urgency/i), { target: { value: 'Immediate (0–24h)' } })
    fireEvent.change(screen.getByLabelText(/Links to remove/i), { target: { value: 'https://example.com/bad' } })
    fireEvent.change(screen.getByLabelText(/Desired deadline/i), { target: { value: '2025-01-01' } })

    fireEvent.click(screen.getByRole('button', { name: /submit request/i }))

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalled()
      expect(screen.getByText(/Request received/i)).toBeInTheDocument()
    })
  })
})
