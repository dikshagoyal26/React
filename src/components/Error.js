import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.dir(error)
  return (
    <div>
      <h1>Oops!!</h1>
      <h3>Something went error</h3>
      <h5>{error.status}: {error.statusText}</h5>
    </div>
  );
};
export default Error;
