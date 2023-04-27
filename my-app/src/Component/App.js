import {React} from "react";
import {Component} from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../Calculation/calculate.js";

import "./App.css";

export default class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}