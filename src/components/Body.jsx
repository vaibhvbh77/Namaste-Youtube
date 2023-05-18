import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const Body = (props) => {
  const toggleSideBar = useSelector((store) => store.app.isOpen);
  return (
    <div>
      <div className="flex">
        {toggleSideBar ? <SideBar /> : ""}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
