import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "../counterReducer"

const CounterContainer = () => {

const count = useSelector((state:any) => (state.counterReducer.count))
const dispatch = useDispatch()
const handlePlus = useCallback(() => dispatch(increase()),[dispatch])
const handleMinus = useCallback(() => dispatch(decrease()),[dispatch])

 return(<>
  {/* <counter count = {count} handlePlus={handlePlus} handleMinus ={handleMinus} */}
 
 </>)

} 



export default CounterContainer