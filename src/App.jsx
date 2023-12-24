import { useState } from 'react'
import { Display } from './components/'
import { calculate } from './functions/functions'

function App(){ 
  const [exp,setExp] = useState([])
  const [ans,setAns] = useState('')

  function handleClick(button){

    switch(button.value) {
      case 'AC':
        setExp([])
        setAns('')
        break;
      case '=':
        setAns(calculate(exp))
        break;
      default:
        setExp(prev => [...prev,button.value])
    }  
  }
   
  return (
    <div>
      <Display 
        handleClick={handleClick}
        exp={exp}
        ans={ans}
      />    
    </div>
  )
}

export default App
