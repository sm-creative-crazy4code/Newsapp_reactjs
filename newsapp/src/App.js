//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {



apiKey=process.env.REACT_APP_NEWS_API
state={
progress:0
}



setProgress=(progress)=>{
 this.setState({progress: progress})

  }
  //created an object of default class
  //c=" by sneha"//creating a class variable
  render() {
    return (
     
      <div>
       <Router>
<Navbar/>
<LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
        // onLoaderFinished={() => setProgress(0)}
      />

<Switch>
<Route exact path="/"> <News setProgress={this.setProgress}    apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general"/>   </Route>
<Route exact path="/business">  <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business"/>   </Route>
<Route exact path="/entertainment"> <News setProgress={this.setProgress}    apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment"/> </Route>
<Route exact path="/general"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general"/>   </Route>
<Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health"/>   </Route>
<Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science"/>   </Route>
<Route exact path="/sports"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports"/> </Route>
<Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={6} country="in" category="technology"/> </Route>
</Switch>




</Router>

      </div>
      
    )
  }
}

// clas  based cmponents

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
///app.js is entrypoint
/////app.js cntains ur cmponents
//////iindex.js import app and put it inside index. himl
//export default App;
