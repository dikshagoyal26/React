import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="p-2 m-2 w-full text-center font-bold">
      This site is developed & managed by {user.name} - {user.email}
    </div>
  );
};
export default Footer;
