import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
      console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times` 
    },[count]) //This is array and we need to pass props or state.

  return (
    <div>
      <input type = 'text' value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={() => setCount (count + 1)}>Click {count}</button>
    </div>
  )
}

export default HookCounterOne