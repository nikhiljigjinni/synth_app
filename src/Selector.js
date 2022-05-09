import React from "react";

function Selector(props) {

    return (
        <div className="Selector">
            <span>Wave</span>
            <select value={props.wave} onChange={props.handleChange}>
                <option value="sine">Sine</option>
                <option value="square">Square</option>
                <option value="triangle">Triangle</option>
            </select>
        </div>
    );
}
export default Selector;