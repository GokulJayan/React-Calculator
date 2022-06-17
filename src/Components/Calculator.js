import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
<<<<<<< HEAD

=======
  
>>>>>>> 3586a282797e6b87bf2699705fd01630c7731671
  const [N1,setN1]=useState(0)
  const [N2,setN2]=useState(0)
  const [op,setOp]=useState("Add")
  const [res,setRes]=useState(0)
  const [col1,setCol1]=useState('#f94828')
  const [col2,setCol2]=useState('#f8cec7')
  const [col3,setCol3]=useState('#fc7760')
<<<<<<< HEAD

=======
  
>>>>>>> 3586a282797e6b87bf2699705fd01630c7731671
  const Calculate=()=>{
    if(op=="Add") setRes(N1+N2)
    else if(op=="Subtract") setRes(N1-N2)
    else if(op=="Multiply") setRes(N1*N2)
    else if(op=="Divide"){
      if(N2==0)setRes("0 can't divide")
      else setRes((N1/N2).toFixed(2))
    }
  }

  const Reset=()=>{
    setN1(0)
    setN2(0)
    setRes(0)
  }

  const setOperator=(e)=>{
    setOp(e.target.value)
    if(e.target.value=="Add"){
      setCol1('#f94828'); setCol2('#f8cec7'); setCol3('#fc7760')
    }
    else if(e.target.value=="Subtract"){
      setCol1('#484cb5'); setCol2('#c0c2fa'); setCol3('#5f62b3')
    }
    else if(e.target.value=="Multiply"){
      setCol1('#3eb871'); setCol2('#bff5d5'); setCol3('#6bc28f')
    }
    else if(e.target.value=="Divide"){
      setCol1('#f08011'); setCol2('#fcd8b3'); setCol3('#eb9c4d')
    }
  }

  return (
    <div style={{background: col1, borderColor:col1}} className="calculator">
      <div style={{background: col1}}>
        <select style={{background: col3}} onChange={e=>setOperator(e)} name="operation" id="operations">
          <option value="Add" >+</option>
          <option value="Subtract" >−</option>
          <option value="Multiply" >×</option>
          <option value="Divide" >÷</option>
        </select>
      </div>

      <div style={{background: col1}} className='input-values'>
        <input style={{color: col1, background: col2}} value={N1} placeholder="0" type="number" onChange={e=>setN1(parseInt(e.target.value))}/>
        <input style={{color: col1, background: col2}} value={N2} placeholder="0" type="number" onChange={e=>setN2(parseInt(e.target.value))}/>
      </div>

      <button style={{background: col3}} onClick={Calculate}>{op}</button>
      <button style={{background: col3}} className='ml-4' onClick={Reset}>Reset</button>
      
      <h2 style={{background: col1, maxHeight:"9cm"}}>{res}</h2> 
    </div>
  )
}

export default Calculator
