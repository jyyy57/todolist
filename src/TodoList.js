import React from 'react';

class TodoList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div>
         <div className="App">
          <input value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
