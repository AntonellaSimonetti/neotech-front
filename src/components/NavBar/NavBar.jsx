import NavbarBase from "./NavBarBase";
import UserMenu from "../user-menu/UserMenu";
import "./NavBar.css";
import { useAuth } from "../context/AuthContext";

function navBar() {
  const { user, isLogin, logOut } = useAuth();
  return (
    <div className="navbar-container">
      <NavbarBase />

      <div className="navbar-right">
        <UserMenu isLogin={isLogin} user={user} logOut={logOut} />
      </div>
    </div>
  );
}

export default navBar;
