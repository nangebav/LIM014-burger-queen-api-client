// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import axios from 'axios';
 
import { getOrders } from '../Services/orders';
 
jest.mock('axios');
 
describe('getOrders', () => {
    it('fetches successfully data from an API', async () => {
        const data = {};
     
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
     
        await expect(getOrders()).resolves.toEqual(data);
    });
 
      it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
     
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );
     
        await expect(getOrders()).rejects.toThrow(errorMessage);
      });
});