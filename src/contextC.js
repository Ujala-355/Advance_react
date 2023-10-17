import D from "./contextD"
const C=(props)=>{
    return(
        <>
            <h1>C Component</h1>
            <D name={props.name}/>
        </>
    )
}
export default C;