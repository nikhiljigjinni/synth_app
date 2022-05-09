import React from "react";
import Parameter from "./Parameter"
import Selector from "./Selector"
class Oscillator extends React.Component {
    constructor(props) {
        super(props);
        this.audioCtx = props.audioCtx;
        this.oscillator = null;
        this.gainNode = null;
        this.state = {
            volume: 0.3,
            attack: 0.5,
            decay: 0.5,
            sustain: 0.7,
            release: 0.5,
            type: 'sine',
        };
    }

    handleWaveChange = (e) => {
        let current = {...this.state};
        current.type = e.target.value;
        this.setState(current);
    }

    handleVolumeChange = (e) => {
        let current = {...this.state};
        current.volume = parseFloat(e.target.value);
        this.setState(current);
    }

    handleAttackChange = (e) => {
        let current = {...this.state};
        current.attack = parseFloat(e.target.value);
        this.setState(current);
    }
    handleReleaseChange = (e) => {
        let current = {...this.state};
        current.release = parseFloat(e.target.value);
        this.setState(current);
    }

    handleSustainChange = (e) => {
        let current = {...this.state};
        current.sustain = parseFloat(e.target.value);
        this.setState(current);
    }
    handleDecayChange = (e) => {
        let current = {...this.state};
        current.decay = parseFloat(e.target.value);
        this.setState(current);
    }

    noteOn = () => {

        this.oscillator = this.audioCtx.createOscillator();
        this.gainNode = this.audioCtx.createGain();


        this.oscillator.type = this.state.type;
        this.oscillator.frequency.setValueAtTime(440, this.audioCtx.currentTime);

        this.gainNode.gain.cancelScheduledValues(this.audioCtx.currentTime);
        this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);

        this.gainNode.gain.linearRampToValueAtTime(1, this.audioCtx.currentTime + this.state.attack);
        this.gainNode.gain.linearRampToValueAtTime(this.state.sustain, this.audioCtx.currentTime + this.state.attack + this.state.decay);

        this.gainNode.connect(this.audioCtx.destination);
        this.oscillator.connect(this.gainNode);
        this.oscillator.start();
    }

    noteOff = () => {
        this.gainNode.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + this.state.release);
        this.oscillator.stop(this.audioCtx.currentTime + this.state.release);
    }
    render() {
        return (
            <div className="Oscillator">
                
                <Parameter label="Volume" value={this.state.volume} handleChange={this.handleVolumeChange}/>
                <Parameter label="Attack" value={this.state.attack} handleChange={this.handleAttackChange}/>
                <Parameter label="Decay" value={this.state.decay} handleChange={this.handleDecayChange}/>
                <Parameter label="Sustain" value={this.state.sustain} handleChange={this.handleSustainChange}/>
                <Parameter label="Release" value={this.state.release} handleChange={this.handleReleaseChange}/>
                <Selector wave={this.state.type} handleChange={this.handleWaveChange}/>
                <button onMouseDown={this.noteOn} onMouseUp={this.noteOff}>Play</button>
            </div>
        );
    }
}

export default Oscillator;