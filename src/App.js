import React, { Component } from 'react';
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';



class App extends Component {

  render() {
    return (
      <div className="App">
      <HookCounterThree/>
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
      </div>
    );
  }
}

export default App;