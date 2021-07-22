import UserNavBar from "./User/NavBar";
import AdminNavBar from "./Admin/NavBar";
import LayoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  let user = "admin";
  return (
    <>
      {user === "admin" ? <AdminNavBar /> : <UserNavBar />}

      <div
        className={LayoutStyles.container}
        className="bg-white dark:bg-gray-800 min-h-screen"
      >
        <main className={LayoutStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
