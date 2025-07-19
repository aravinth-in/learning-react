export const Task = (props) => {
    return (
    <div 
        className="displayTask"
        style = {{backgroundColor : props.completed ? "green" : "white"}}
    >
        <h2> {props.taskName} </h2>
        <button onClick={() => props.completeTask(props.id)}> complete</button>
        <button onClick={() => props.deleteTask(props.id)}> delete </button>
    </div>
);
}