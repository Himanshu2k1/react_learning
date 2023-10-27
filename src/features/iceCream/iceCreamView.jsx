import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IceCreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecreams = useSelector(state => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>number of icecreams {numOfIcecreams}</h1>
        <button onClick={()=>dispatch(ordered())}>order icecreams</button>
        <input
        type='number'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
        <button onClick={()=>dispatch(restocked(value))}>restock icecreams</button>
    </div>
  )
}