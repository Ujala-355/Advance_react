const MyModal1=({closeModal})=>{
    return(
        <>
            <div>
                <div>
                    <button onClick={()=>closeModal(false)}>x</button>
                    <div>
                        <h1>hello modal</h1>
                    </div>
                    <div>
                        <p>The next page is awesome! you move forward, you will enjoy it</p>
                    </div>
                    <div>
                        <button onClick={()=>closeModal(false)}>Cancel</button>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyModal1;