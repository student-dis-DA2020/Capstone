import React, { Component } from 'react';
import Students from './components/students';

class App extends Component {
  render() {
    return (
      <Students students={this.state.students} />
    );
  }

  state = {
    students: []
  };

  componentDidMount() {
        fetch('https://ancient-bayou-94629.herokuapp.com/all')
        .then(res => res.json())
        .then((data) => {
          this.setState({ students: data })
        })
        .catch(console.log)
      }

}

export default App;