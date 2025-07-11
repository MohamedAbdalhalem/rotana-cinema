import { useSelector } from "react-redux"
import { ourStoreType } from "../../lib/store"


export default function Home() {
  const {token} = useSelector((state: ourStoreType) => state.authsilce)
  return (
    <div>
      {token}
    </div>
  )
}
