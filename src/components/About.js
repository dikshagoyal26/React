import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <div>About Us Page</div>
        <UserContext.Consumer>
          {({user}) => <h4 className="font-bold text-center
          ">{user.name}-{user.email}</h4>}
        </UserContext.Consumer>
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
