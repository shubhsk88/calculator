import React, { Component } from 'react';
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = { total: null, next: null, operation: null };
  }
  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display total={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Display />
//       <ButtonPanel />
//     </div>
//   );
// }

export default App;
