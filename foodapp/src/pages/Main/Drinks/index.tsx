import { useContext} from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { SnackContext } from "../../../App"

export default function Drinks () {

  const {drinks} = useContext(SnackContext)
  return (
    <>
    <Head title="Drinks"/>
    <SnackTitle>Drinks</SnackTitle>
    <Snacks snacks={drinks}></Snacks>
    </>
)
}
