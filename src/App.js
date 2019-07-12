import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { Provider } from "./context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { id: 1, value: "banana", isChecked: false },
        { id: 2, value: "apple", isChecked: false },
        { id: 3, value: "mango", isChecked: false },
        { id: 4, value: "grap", isChecked: false }
      ],
      newArray: []
    };
  }
  handleAllChecked = event => {
    let fruits = this.state.fruits;
    fruits.forEach(fruite => (fruite.isChecked = event.target.checked));
    this.setState({ fruits: fruits });
  };
  handleCheckChieldElement = event => {
    let fruits = this.state.fruits;
    fruits.forEach(fruite => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked;
    });
    this.setState({ fruits: fruits });
  };
  render() {
    const { fruits } = this.state;

    return (
      <div className="App">
        <h1> Check and Uncheck All Example </h1>
        {console.log(fruits)}
        <input
          type="checkbox"
          onClick={this.handleAllChecked}
          value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.fruits.map(fruite => {
            return (
              <CheckBox
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            );
          })}
        </ul>
      </div>
      // <Provider>
      //   <Router>
      //     <React.Fragment>
      //       <Navbar />
      //       <div className="container">
      //         <Switch>
      //           <Route exact path="/" component={Index} />
      //           <Route path="/lyrics/track/:id" component={Lyrics} />
      //         </Switch>
      //       </div>
      //     </React.Fragment>
      //   </Router>
      // </Provider>
    );
  }
}

export default App;

// Lyrics Search App Using React Context API and Musixmatch API

export const CheckBox = props => {
  return (
    <li>
      <input
        key={props.id}
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};
