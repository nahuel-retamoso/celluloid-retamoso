import { useState, createContext } from 'react';

const CartContext = createContext()


export function CartContextProvider ({children}) {
    
    const [ cart, setCart ] = useState([])

    console.log(cart)

    const inCart = (id) => {
        return cart.some(prod => prod.id === id)
    }


      const AddItem = (products) => {
          if(!inCart(products.id)) {
              setCart([...cart, products])
          }
            else {
              const newCart = cart.map(prod => {
  
                  if(prod.id === products.id) {
                      const newProduct = {...prod, parentcount: products.parentcount}
                      return newProduct
              
                  } else {
                     return prod 
                  }
              })
              setCart(newCart)
          }
      }
      
    


    const deleteItem = (id) => {
        const deleteItem = cart.filter(prod => prod.id !== id)
        setCart(deleteItem)
    }


    const widgetNumber = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.parentcount
        })
    
        return accu
    }


    return (
        <CartContext.Provider value={{ AddItem, widgetNumber, deleteItem, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;