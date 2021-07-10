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

      rest.get('http://localhost:8888/users', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json({
          _id: '001',
          email: 'example1@gmail.com',
          roles: { admin: true },
        }
        ),
      )),
    
      rest.post('http://localhost:8888/users', (req, res, ctx) => res(
        ctx.status(200),
        ctx.json(req.body),
      )),
    
      rest.delete('http://localhost:8888/users', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json('')
      )),
    
      rest.put('http://localhost:8888/users/001', (req, res, ctx) => res(
        ctx.status(200),
        ctx.json(req.body),
      )),
    // Handles a GET /user request
    // rest.get('http://localhost:8888/users', null),
]