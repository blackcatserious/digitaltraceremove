import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { ServiceForm } from '../ServiceForm'
import { I18nProvider } from '../../i18n/I18nProvider'

describe('ServiceForm', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
    }) as unknown as typeof fetch
  })

  it('submits required fields', async () => {
    render(
      <I18nProvider language="en">
        <ServiceForm serviceName="Emergency ORM" />
      </I18nProvider>,
    )

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } })
    fireEvent.change(screen.getByLabelText(/links/i), {
      target: { value: 'https://example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: /send secure request/i }))

    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalled()
    })
  })
})
