export const Task = (props) => {
    return (
    <div className="displayTask">
        <h2 key={props.key}> {props.taskName} </h2>
        <button onClick={() => props.deleteTask(props.id)}> delete </button>
    </div>
);
}