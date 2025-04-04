import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice';
const App = () => {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col w-fit m-4'>
      <div>{count}</div>
      <button className='bg-gray-300 hover:bg-gray-400 mt-2 rounded-md' onClick={()=>dispatch(increment())}>increment</button>
      <button className='bg-gray-300 hover:bg-gray-400 mt-2 rounded-md' onClick={()=>dispatch(decrement())}>decrement</button>
      <button className='bg-gray-300 hover:bg-gray-400 mt-2 rounded-md' onClick={()=>dispatch(incrementByAmount(10))}>increment by 10</button>
    </div>
  )
}

export default App