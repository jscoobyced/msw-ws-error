import '@testing-library/jest-dom'
import { server } from './src/mocks/mswServer'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

// Close server after all tests
afterAll(() => {
  server.close()
})

// Reset handlers after each test for test isolation
afterEach(() => {
  server.resetHandlers()
})
