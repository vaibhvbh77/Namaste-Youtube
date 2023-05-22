import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import Head from "./Head";
const Body = (props) => {
  const toggleSideBar = useSelector((store) => store.app.isOpen);
  const darkTheme = useSelector((store) => store.app.darkTheme);

  return (
    <div>
      <Head />
      <div className={darkTheme ? "flex bg-black" : "flex bg-white"}>
        {toggleSideBar ? <SideBar /> : ""}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
