import { Component } from "react";

class GrandChild extends Component{
    constructor(props) {
        super(props)
        console.log("GrandChild constructor", this.props.id, "parent", this.props.parent);
      }
      componentDidMount(){
        console.log("GrandChild componentDidMount", this.props.id, "parent", this.props.parent)
      }
      componentWillUnmount(){
        console.log("Child componentWillUnmount", this.props.id, "parent", this.props.parent);
      }
      render() {
        console.log("GrandChild render", this.props.id, "parent", this.props.parent)
        return (
          <>
            {/* <ProfileClass id={1} />
            <ProfileClass id={2} /> */}
          </>
        );
      }
}
export default GrandChild;