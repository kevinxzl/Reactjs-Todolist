import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnAddClick = this.handleBtnAddClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleBtnAddClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    //console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            deleteFunc={this.handleItemDelete}
            key={index}
            content={item}
            index={index}
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='red-btn' onClick={this.handleBtnAddClick}> Add </button>
        </div>
        <ul>{this.getTodoItems()} </ul>
      </Fragment>
    );
  }
}

export default TodoList;
