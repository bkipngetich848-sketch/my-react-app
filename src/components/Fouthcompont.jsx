const Forthcomponent=()=>{

    // below we declare variables 
    let counrty="Germany"
    let population="625847"
    let continent="Europe"
    let currency="Euros"
    return(
        <div className="mmm">
        {/* below we bind our variables*/}
        <h1>Welcome to the fifth component </h1>
        <p>This component is to show more about Germany This component is to show more about Germany This component is to show more about Germany</p>
        <p>My name is :{counrty}</p>
        <p>i do live in the county:{population}</p>
        <p>i am {continent} years old</p>
        <p>i do ,love {currency}</p>
        </div>
    )
}
export default Forthcomponent;