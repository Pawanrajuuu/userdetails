
import {useState,useEffect} from 'react'

const Calculator = () => {

  const storedHeight = JSON.parse(localStorage.getItem("height"))
  const storedweight = JSON.parse(localStorage.getItem("weight"))
  
  const [height,setHeight] = useState(storedHeight !== null ? storedHeight:170)
  const [weight,setWeight] = useState(storedweight !== null ? storedweight:60)
  

  const BmiCalculator =(height,weight)=>{
    const heightInMeters = height/100
    const bmi = weight/heightInMeters**2
    return bmi.toFixed(2)
  }


  useEffect(()=>{
    document.title = `bmi ${BmiCalculator(height,weight)}`
  })

  useEffect(()=>{
    localStorage.setItem("height", JSON.stringify(height))
  })
  useEffect(()=>{
    localStorage.setItem("weight",JSON.stringify(weight))
  })

  const increaseOnHeight = ()=>setHeight(preValue => preValue+1)
  const decreaseOnHeight = ()=>setHeight(preValue => preValue-1)
  const increaseOnWeight = ()=>setWeight(preValue => preValue+1)
  const decreaseOnWeight = ()=>setWeight(preValue => preValue-1)

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <h1>Height</h1>
        <p>{height}</p>
        <button onClick ={increaseOnHeight}>Increase</button>
        <button onClick = {decreaseOnHeight}>Decrease</button>
      </div>
      <div>
        <h1>Weight</h1>
        <p>{weight}</p>
        <button onClick ={increaseOnWeight}>Increase</button>
        <button onClick = {decreaseOnWeight}>Decrease</button>
      </div>
      <div>
        <h1>your BMI :- {BmiCalculator(height,weight)}</h1>
      </div>
    </div>
  )
}

export default Calculator