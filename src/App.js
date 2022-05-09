import React from "react";
import Oscillator from "./Oscillator"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioCtx: props.audioCtx
        };
    }
    render() {
        return (
            <div className="App">
                <Oscillator audioCtx={this.state.audioCtx}/>
            </div>
        );
    }
}

export default App;