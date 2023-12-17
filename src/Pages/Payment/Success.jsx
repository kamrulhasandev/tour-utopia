import { useParams } from "react-router-dom"

function Success() {
  const {tranId} = useParams()
  return (
    <div className="min-h-[80vh] w-full flex justify-center items-center">
      <div>Success. Transaction ID: {tranId}</div>
    </div>
  )
}

export default Success