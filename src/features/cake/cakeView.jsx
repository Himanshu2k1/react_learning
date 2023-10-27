// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const noOfCakes=useSelector((state)=>state.cake.numOfCakes)
  const dispatch=useDispatch()
  return (
    <div>
        <h1>number of cakes {noOfCakes} </h1>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <button onClick={()=>dispatch(restocked(5))}>restock cake</button>
    </div>
  )
}
