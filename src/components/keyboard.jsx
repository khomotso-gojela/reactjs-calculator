import { calcData } from "../data/data"

function Keyboard({handleInput}){
    return(
      <div className="row blue">
        {calcData.map(({id, value, col})=>(
        //   <Key key={key.id} keyData={key} handleInput={handleInput}/>
            <button key={id}>
                {value}
            </button>
        ))}
      </div>
    )  
  }

  export default Keyboard
