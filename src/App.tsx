import {Component} from "react";
import './App.css';
import {Counter} from "./Counter/Counter";

class App extends Component{
    render() {
        return (
            <div className="app">
                <Counter data={"Saman"}/>
            </div>
        );
    }
}

export default App;