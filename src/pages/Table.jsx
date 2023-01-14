import { RowData } from "../components/rowdata";
import { ResultHeader } from "../components/resultheader";
import "../App.css";
const Table = () =>{
    return(
        <>
            <ResultHeader subject="Cancer in the Mediterranean"/>
            <div className="bit">
                <div className="head_line">
                    <div className="name">Name</div>
                    <div className="score">Score</div>
                </div>
                <RowData studentName = "Kelechi Samuel Onouha"  score="96/100"/>
                <RowData studentName ="Fortune Yusuf Ishaku" score = "30/100"/>
            </div>
        </>
    )
}
export default Table;