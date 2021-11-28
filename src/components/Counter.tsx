import React, { useState } from 'react'

const Counter = () => {
  const [Count, SetCount] = useState(0)
  const increment = () => {
    SetCount(Count + 1)
  }
  console.log('count rerender')
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h2>{Count}</h2>
    </div>
  )
}

export default Counter
