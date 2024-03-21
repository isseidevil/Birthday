import { useState } from 'react'
import User from './Project/List'
import './Project/List.css'

const App = () => {
  const[data,setData]=useState(User)
  return (
    <div>
      <section className='cont'>
      <p><h1> Birthdays: {data.length}</h1></p>
      <br />
      {
        data.map((x)=>{
          return(
            
            <div id='set'>                
                <img src={x.image} />
                <div>
                  <p id='txt'>{x.name}</p>
                  <p>{x.b_date}</p>
                </div>
            </div>
            
          )
        })
        
      }
      <button onClick={()=>setData([])}>Clear</button>
      </section>
    </div>
  )
}

export default App
