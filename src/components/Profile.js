import { useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is profile functional component</h1>
      <h2>{props.name}</h2>
      <h3>Count: {count}</h3>
      <button onClick={()=> setCount(1)}>Click Me!!</button>

    </div>
  );
};
export default Profile;
