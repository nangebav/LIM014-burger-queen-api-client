import { rest } from 'msw'

export const handlers = [
    // Handles a POST /login request
    rest.post('http://localhost:8888/auth', (req, res, ctx) => {
        // Persist user's authentication in the session
        localStorage.setItem('token', 'bqueen123')
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json(req.body)  
        )
      }),
    // Handles a GET /user request
    // rest.get('http://localhost:8888/users', null),
]