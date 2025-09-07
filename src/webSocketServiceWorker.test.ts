import { ws } from 'msw'
import { WebSocket } from 'ws'
import { server } from './mocks/mswServer'

const serverUrl = 'wss://127.0.0.1:6789/message'

const myWebSocket = ws.link(serverUrl)
const handler = [
  myWebSocket.addEventListener('connection', ({ client }) => {
    console.log('Mock WebSocket server: Client connected')
    client.addEventListener('message', (event) => {
      console.log('Mock WebSocket server received message:', event.data)
    })
  }),
]

describe('WebSocket - success', () => {
  beforeAll(() => {
    server.use(...handler)
  })

  it('should send text message', () => {
    const socket = new WebSocket(serverUrl, { protocol: 'wss' })
    socket.onopen = () => {
      console.log('WebSocket client: Connection opened')
    }
    expect(socket).toBeDefined()
    socket.send('hello')
  })
})
