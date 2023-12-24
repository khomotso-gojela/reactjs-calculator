import { calcData } from "../data/data"

function Display({handleClick,exp,ans}){

  return (
  <div className="calc-wrapper">
    <div className="screen">
      <div className="expression">
        <p>{exp.join(' ')}</p>        
      </div>
      <div className="answer">
        <p>{ans}</p>
      </div>
    </div>
    <div className="buttons">
      {calcData.map((button) => (
        <div 
          key={button.id}
          className="button"
          onClick={ () => handleClick(button) }
        ><p>{button.value}</p></div>
      ))}
    </div>   
  </div>
    )
}

export default Display