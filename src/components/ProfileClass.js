import React from "react";
import GrandChild from "./GrandChild";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // create state
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Child constructor", this.props.id);
  }
  componentDidMount() {
    console.log("Child componentDidMount", this.props.id);
    // const response = await fetch("https://api.github.com/users/dikshagoyal26");
    // const json = await response.json()
    // console.log("Child json", this.props.id, json)
    this.timer = setTimeout(() => {
      console.log("Child setTimeout", this.props.id);
    }, 1000);
  }
  componentWillUnmount(){
    console.log("Child componentWillUnmount", this.props.id);
  }
  render() {
    console.log("Child render", this.props.id);
    // console.log(this);
    // console.log(this.props);
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>Profile Class Component {this.props.id}</h1>
        <h2>{this.props.name}</h2>
        <h3>Count: {count}</h3>
        {/* <h3>Count2: {count2}</h3> */}
        <button
          onClick={() => {
            this.setState({
              count: 1,
              //   count2: 2
            });
          }}
        >
          Click Me!!
        </button>
        <GrandChild id={1} parent={this.props.id}/>
        <GrandChild id={2} parent={this.props.id}/>
      </div>
    );
  }
}

export default Profile;
