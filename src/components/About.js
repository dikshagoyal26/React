import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor() {
    super()
    console.log("Parent constructor");
  }
  componentDidMount(){
    console.log("Parent componentDidMount")
  }
  componentWillUnmount(){
    console.log("Parent componentWillUnmount");
  }
  render() {
    console.log("Parent render")
    return (
      <>
        <ProfileClass id={1} />
        <ProfileClass id={2} />
      </>
    );
  }
}

// const About = () =>{
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <ProfileClass id={1} />
//             <ProfileClass id={1} />
//             {/* <Outlet /> */}
//         </div>
//     )
// }

export default About;
