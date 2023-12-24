import React from 'react'
import { apearance } from '../data/data'

function ColorForm({ handleColors }) {

  return (
    <div className='form'>

        <form onSubmit={ (e) => handleColors(e) } name='colorForm'>

            {/* <label htmlFor="theme">Theme</label><br />
            <select name="theme" id="">
                {apearance.theme.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <br /><br /> */}

            <label htmlFor="colorssss">Color:</label>
            <select name="color" id="color">
                {apearance.color.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
          
            
            <button>Apply</button>
        </form>
    </div>
  )
}

export default ColorForm