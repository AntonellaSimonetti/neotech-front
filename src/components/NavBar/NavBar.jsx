import NavbarBase from "./NavBarBase";
import UserMenu from "../user-menu/UserMenu";
import "./NavBar.css";

function navBar({ isLogin, isAdmin, user, logOut }) {
  return (
    <div className="navbar-container">
      <NavbarBase />

      <div className="navbar-right">
        <UserMenu
          isLogin={isLogin}
          isAdmin={isAdmin}
          user={user}
          logOut={logOut}
        />
      </div>
    </div>
  );
}

export default navBar;
