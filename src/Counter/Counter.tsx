import {Component} from "react";
import './Counter.css';

interface CounterProps{
    data:any;
}

interface CounterAppState{
    count:number
}

export class Counter extends Component<CounterProps,CounterAppState> {

    constructor(props:any) {
        super(props);
        this.state={
            count:0
        };
        alert("Constructor:Component is initializing");
    }

    componentDidMount() {
        alert("ComponentDidMount:Component has been mounted! Props: "+this.props.data);
    }

    componentWillUnmount() {
        alert("ComponentWillUnmount:Component will be unmounted!");
    }

    increment=()=>{
        // alert("Increment Clicked");
        this.setState((previousState)=>({
            count:previousState.count+1
        }));
    }

    decrement=()=>{
        this.setState((previousState)=>({
            count:previousState.count-1
        }));
    }
    render() {
        return (
            <div className="counter">
                <h1>React Counter (Class Component)</h1>
                <h2>Count:{this.state.count}</h2>
                <div>
                    <button className="button" onClick={this.increment}>+</button>
                    <button className="button" onClick={this.decrement}>-</button>
                </div>
            </div>
        );
    }
}