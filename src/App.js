import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import Counter from './Counter.worker'

const { counterState } = Counter()

const App = observer(() => {
  useEffect(() => {
    counterState().then(console.log)
  }, [])

  return (
    <div>
      <h1>Counter App: MobX</h1>
      {/* <p>Counter: {counterStore.counter}</p> */}
      <br />
      {/* <button onClick={counterStore.increment}>Increment</button>
      <button onClick={counterStore.decrement}>Decrement</button> */}
    </div>
  )
})

export default App
