import { useContext } from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { SnackContext } from "../../../App"

export default function IceCreams () {

  const {iceCreams} = useContext(SnackContext)
  return (
    <>
    <Head title="IceCreams"/>
    <SnackTitle>IceCreams</SnackTitle>
    <Snacks snacks={iceCreams}></Snacks>
    </>
)
}
