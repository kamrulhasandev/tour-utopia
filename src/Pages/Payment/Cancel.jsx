import { useParams } from "react-router-dom"

function Cancel() {
  const {tranId} = useParams()
  return (
    <div className="min-h-[80vh] w-full flex justify-center items-center">
      <div>Failed. Transaction ID: {tranId}</div>
    </div>
  )
}

export default Cancel