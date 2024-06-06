import {useState} from 'react'

const App = ()=>{
  const [count,setterCount] = useState(0)
  const decrease = ()=> setterCount(count-1)
  const reset = ()=>setterCount(0)
  const increase = () => setterCount(count+1)
  return(
    <>
      <h1>Counter</h1>
      <h2> {count}</h2>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>Increase</button>
    </>
  )
}
export default App