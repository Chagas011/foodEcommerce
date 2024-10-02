import { useEffect, useState } from "react"
import { useCart } from "../../../hooks/useCart"
import { TableDesktop } from "./TableDesktop"
import { TableMobile } from "./TableMobile"
import { EmptyCart } from "../../../components/EmptyCart"

export function Table() {

  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth)
  const { cart } = useCart()

  useEffect(() => {
    function updateTableComponentBasedWindowWidth() {
      const currentWidth = document.documentElement.clientWidth

      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentBasedWindowWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentBasedWindowWidth)
    }
  }, [])
  if (cart.length === 0) return <EmptyCart title="Ops! Nenhum item adicionado"/>

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
