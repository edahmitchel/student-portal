export const RowData = (props) =>{
    return (
      <div className="a-row">
            <div className="student_name">
                {props.studentName}
            </div>
            <div className="student-score">
                {props.score}
            </div>
      </div>
    )
};