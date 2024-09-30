import { useCart } from "../../../hooks/useCart"
import { TableDesktop } from "./TableDesktop"

export function Table() {
  const { cart } = useCart()

  if (cart.length === 0) return <h1>Ops! Nenhum item adicionado</h1>

  return <TableDesktop />
}
