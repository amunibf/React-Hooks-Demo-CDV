import React, { Component } from 'react';
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import ClassCounterOne from './components/ClassCounterOne';



class App extends Component {

  render() {
    return (
      <div className="App">
      <HookCounterOne/>
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <ClassCounterOne/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
      </div>
    );
  }
}

export default App;