// import { render, screen } from '@testing-library/react';
// import App from '../App';

import{ postRequest} from '../Services/auth'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test ( 'permite al usuario iniciar sesión' , async ( ) => {    
    // Representar componentes, realizar solicitudes, recibir respuestas simuladas.

// } )

//AUTH
describe('postRequest', () => {
    test('Debería retornar email y contraseña', async () => {
      const response = await  postRequest({"email": "bq@gmail.com" , "password": "123456"});
      expect(response.data).toEqual({"email": "bq@gmail.com" , "password": "123456"});
    });
  });

