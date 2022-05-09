

function Parameter(props) {
    return (
        <div className="Parameter">
            <span>{props.label}</span>
            <input type="range" min="0.0" max="1" step="0.01" value={props.value} onChange={props.handleChange}/>
        </div>
    );
}

export default Parameter;