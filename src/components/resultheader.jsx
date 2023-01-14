import "../App.css"
export const ResultHeader = (props) =>{
    return(
        <>
            <div className="sub-result">
                <h2 className="result">Results for {props.subject}</h2>
            </div>
        </>
    )
}