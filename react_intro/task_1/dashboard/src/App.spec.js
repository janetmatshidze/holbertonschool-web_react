import { render, screen } from '@testing-library/react'
import App from './App'

test('App renders correctly with header, body, footer and image', () => {
  render(<App />)

  // 1. Check h1 text (case insensitive)
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toHaveTextContent(/school dashboard/i)

  // 2. Check body paragraph text
  const bodyText = screen.getByText(/login to access the full dashboard/i)
  expect(bodyText).toBeInTheDocument()

  // 3. Check footer paragraph text
  const footerText = screen.getByText(/copyright 2026 - holberton school/i)
  expect(footerText).toBeInTheDocument()

  // 4. Check image by alt text
  const logo = screen.getByAltText(/holberton logo/i)
  expect(logo).toBeInTheDocument()
})