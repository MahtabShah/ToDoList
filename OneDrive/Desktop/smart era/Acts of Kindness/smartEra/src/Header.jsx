import "./App.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Sidebar from "./sidebar";

function Header() {
  return (
    <>
      <div className="ms-header-container">
        {/* <HeaderLeft></HeaderLeft> */}
        {/* <HeaderRight></HeaderRight> */}
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export default Header;
