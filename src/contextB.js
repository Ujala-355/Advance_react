import C from "./contextC"
const B=(props)=>{
    return(
        <>
            <h1>B component</h1>
            <C name={props.name} />
        </>
    )
}
export default B