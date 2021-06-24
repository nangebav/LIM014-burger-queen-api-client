import { createContext } from 'react';

const CartContext = createContext({
    client: null,
    order: null,
    notesClient: null,
    time: null
  })

export default CartContext;