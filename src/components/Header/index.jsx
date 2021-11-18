import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("Enter Any Word Plz");
      return;
    }
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Enter to do here (Enter Key)"
        />
      </div>
    );
  }
}
