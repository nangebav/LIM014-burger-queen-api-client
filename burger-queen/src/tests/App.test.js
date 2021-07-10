
import{ postRequest} from '../Services/auth'
import {postUser, getUsers, putUsers, deleteUsers} from '../Services/users'

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

//USERS

describe('USERS', () => {
    test('getUsers: Debería retornar los emails de usuarios', async () => {
      const response = await getUsers();
      expect(response.data).toEqual({
        _id: '001',
        email: 'example1@gmail.com',
        roles: { admin: true },
      }
      );
    });

    test('postUser: Debería retornar al nuevo usuario', async () => {
        const objUser = {
            _id: '002',
            email: 'example3@gmail.com',
            roles: { admin: true }
        }
          const response = await postUser(objUser);
    
          expect(response.data).toEqual(objUser)}
    );

    test('putUsers: Debería retornar al usuario actualizado', async () => {
    //    const objUser = {"email": "example3@gmail.com"};
        const objResp = {
        _id: '001',
        email: 'example3@gmail.com',
        roles: { admin: true }
    }
      const response = await putUsers( objResp,'001');
      expect(response.data).toEqual(objResp);
    });


    test('deleteUsers:  Debería retornar al usurio eliminado', async () => {
        const response = await deleteUsers('003');
        expect(response.data).toBe(undefined);
      });
});
