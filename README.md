## Mocking WebSocket from `ws` package with MSW

Identify and resolve WebSocket mocking with MSW

Steps to reproduce:

- Clone this repository
- `cd` to the repository
- `yanr test`

You will get an error like this:

```
 ✓ src/webSocketServiceWorker.test.ts (1 test) 7ms
   ✓ audioWebSocket - success > should send text message 5ms
⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

Vitest caught 1 unhandled error during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your
 tests are not affected.

⎯⎯⎯⎯⎯ Uncaught Exception ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Error: connect ECONNREFUSED 127.0.0.1:6789
 ❯ TCPConnectWrap.afterConnect [as oncomplete] node:net:1637:16

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { errno: -111, code: 'ECONNREFUSED', syscall: 'connect', address:
 '127.0.0.1', port: 6789 }
This error originated in "src/webSocketServiceWorker.test.ts" test file. It doesn't
 mean the error was thrown inside the file itself, but while it was running.
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯


 Test Files  1 passed (1)
      Tests  1 passed (1)
     Errors  1 error
   Start at  10:55:15
   Duration  94ms
```
