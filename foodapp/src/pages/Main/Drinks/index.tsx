import { useSnack } from "../../../hooks/useSnack"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Drinks () {

  const {drinks} = useSnack()
  return (
    <>
    <Head title="Drinks"/>
    <SnackTitle>Drinks</SnackTitle>
    <Snacks snacks={drinks}></Snacks>
    </>
)
}
