const Thirdcomponent=()=>{

    // below we declare variables 
    let name="Max"
    let county="Nairobi"
    let age=59
    let message=" programming in js"
    return(
        <div className="third">
        {/* below we bind our variables*/}
        <h1>Welcome to the third component </h1>
        <p>This component is to show user how to declare , assign use variables in react This component is to show user how to declare , assign use variables in react</p>
        <p>My name is :{name}</p>
        <p>i do live in the county:{county}</p>
        <p>i am {age} years old</p>
        <p>i do ,love {message}</p>
        </div>
    )
}
export default Thirdcomponent;