import { useState } from 'react'
import { Display } from './components/'
import ColorForm from './components/ColorForm'
import { calculate } from './functions/functions'

function App(){ 
  const [exp,setExp] = useState([])
  const [ans,setAns] = useState('')
  const [colors,setColors] = useState({
    color: 'white'
  })
  
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

  function handleColors(e) {
    e.preventDefault()
    const { value } = e.target.color

    setColors(()=>({
      color: value
    }))
  }
   
  return (
    <div style={{ '--primary': colors.color,'--tertiary': colors.theme }}>
      <Display 
        handleClick={handleClick}
        exp={exp}
        ans={ans}
      />
      <ColorForm handleColors={handleColors} />    
    </div>
  )
}

export default App
