import { useState } from "react"

const Seventhcomponent=()=>{

  
    const[number,setnumber]=useState(0)
    
    
    return(
        <div className="seventh">
            <h1>Score point</h1>
           
            <p>My number is:{number}</p>
            <button onClick={()=>setnumber(number+1)}>Increase</button> <br /> <br />

            <button onClick={()=>setnumber(number-1)}>Decrase</button><br /><br />

            <button onClick={()=>setnumber(0)}>Reset</button>
            

            
 
         
          

        </div>
    )
}
export default Seventhcomponent;