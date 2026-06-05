import { useState } from "react"

const Fifthcomponent=()=>{

    // we declare our hook 
    const[number,setnumber]=useState(10)
    const[age,setage]=useState(14)
    const[name,setName]=useState('James')
     const[counrty,setCounrty]=useState('Kenya')
      const[school,setSchool]=useState('Nairobi school')
    return(
        <div className="fifth">
            <h1>Welcome to the hooks component</h1>
            <p>In the below content we shall have a paragraph with variable called number. Below the paragraph we shall have a button such that on click of the button the content of the variable number changes to new one</p>
            <p>My number is:{number}</p>
            <button onClick={()=>setnumber(25)}>Click</button>

            <p>My age is:{age}</p>                                                                                                                                 
            <button onClick={() => setage(15)}>click to change age</button>

            <p>My name is:{name}</p>
            <button onClick={()=> setName("Max")}>click to change the name</button>

             <p>My name is:{counrty}</p>
            <button onClick={()=> setCounrty("Uganda")}>click to change the name</button>

             <p>My name is:{school}</p>
            <button onClick={()=> setSchool("Brookstate")}>click to change the name</button>

        </div>
    )
}
export default Fifthcomponent