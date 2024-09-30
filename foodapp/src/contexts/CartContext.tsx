import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import {toast} from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'
interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (id: number, snack: Snack) => void
  snackCartIncrement: (id: number, snack: Snack) => void
  snackCartDecrement: (id: number, snack: Snack) => void
  ConfirmOrder: () => void

}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)
export function CartProvider({children}: CartProviderProps) {

  const [cart, setCart] = useState<Snack[]>([])


  function addSnackIntoCart(snack: SnackData): void {
      // buscar
      const snackExistentInCart = cart.find(
        (item) => item.snack === snack.snack && item.id === snack.id
    )

      // atualizar
      if(snackExistentInCart) {
        const newCart = cart.map((item) => {
          if (item.id === snack.id) {
            const quantity = item.quantity + 1
            const subtotal = item.price * quantity

            return {...item, quantity, subtotal}
          }
          return item
        })
        toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado no pedido`)
        setCart(newCart)
        return
      }

      const newSnack = {...snack, quantity: 1, subtotal: snack.price}
      const newCart = [...cart, newSnack]
      toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado no pedido`)
      setCart(newCart)
  }

  function updateSnackQuantity(id: number, snack: Snack, newQuantity: number){
    console.log('atualizar')
  }

  function removeSnackFromCart(id: number, snack: Snack): void {
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === id
  )
  }

  function snackCartIncrement(id: number, snack: Snack): void {
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === id
  )
    updateSnackQuantity(id, snack, snack.quantity + 1)
  }

  function snackCartDecrement(id: number, snack: Snack): void {
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === id
  )

  updateSnackQuantity(id, snack, snack.quantity - 1)
  }

  function ConfirmOrder() {
    console.log('Confirmar Pedido')
  }

  return (
    <CartContext.Provider value={{
      cart,
      addSnackIntoCart,
      removeSnackFromCart,
      snackCartIncrement,
      snackCartDecrement,
      ConfirmOrder
       }}>
      {children}
    </CartContext.Provider>
  )

}
