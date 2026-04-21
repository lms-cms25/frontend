import MenuItem from "../navigation/MenuItem";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  CoursesIcon,
  DashboardIcon,
  HelpCenterIcon,
  logoBookIcon,
  LiveClassIcon,
  LogoutIcon,
  ProfileIcon,
  SettingsIcon,
  SidebarIcon,
  logoShikoIcon,
} from "@/app/assets";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link href="/">
          <Image src={logoShikoIcon} alt="" width={143} height={35} />
        </Link>
        <div className="siderbar-icon-background">
          <img
            src={SidebarIcon}
            alt="Sidebar Toggle"
            className="menu-item-icon"
          />
        </div>
      </div>
      <nav className="sidebar-main">
        <div className="sidebar-section">
          <h5 className="sidebar-section-title">MENU</h5>
          <ul>
            <MenuItem
              icon={DashboardIcon}
              menuItemText="Dashboard"
              href="/dashboard"
            />

            <MenuItem
              icon={CoursesIcon}
              menuItemText="Courses"
              href="/courses"
            />

            <MenuItem
              icon={CalendarIcon}
              menuItemText="Calendar"
              href="/calendar"
            />
            <MenuItem
              icon={LiveClassIcon}
              menuItemText="Live Class"
              href="/liveclass"
            />
          </ul>
        </div>
        <div className="sidebar-section">
          <h5 className="sidebar-section-title">GENERAL</h5>
          <ul>
            <MenuItem
              icon={ProfileIcon}
              menuItemText="Profile"
              href="/profile"
            />
            <MenuItem
              icon={SettingsIcon}
              menuItemText="Settings"
              href="/settings"
            />
            <MenuItem
              icon={HelpCenterIcon}
              menuItemText="Help Center"
              href="/helpcenter"
            />
            <MenuItem icon={LogoutIcon} menuItemText="Log Out" href="#" />
          </ul>
        </div>
        <div className="sidebar-download-app">
          <div className="sidebar-download-app-text">
            <p>Download Our</p>
            <p>Mobile app</p>
          </div>

          <button className="primary-button dl-btn">Download app</button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
