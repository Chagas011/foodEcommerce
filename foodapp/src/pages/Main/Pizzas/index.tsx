import { useContext } from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { SnackContext } from "../../../App"

export default function Pizzas () {

  const {pizzas} = useContext(SnackContext)

  return (
    <>
    <Head title="Pizzas"/>
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={pizzas}></Snacks>
    </>
)
}
