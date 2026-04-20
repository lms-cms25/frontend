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
  rectangle,
} from "@/app/assets";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link href="/">
          <Image
            src={logoShikoIcon.src}
            alt=""
            width={logoShikoIcon.width / 1.5}
            height={logoShikoIcon.height / 1.5}
          />
        </Link>
        <div className="siderbar-icon-background">
          <SidebarIcon />
        </div>
      </div>
      <nav className="sidebar-main">
        <div className="sidebar-section">
          <h5 className="sidebar-section-title">MENU</h5>
          <ul>
            <MenuItem
              icon={<DashboardIcon className="menu-item-icon" />}
              menuItemText="Dashboard"
              href="/dashboard"
            />
            <MenuItem
              icon={<CoursesIcon className="menu-item-icon" />}
              menuItemText="Courses"
              href="/courses"
            />
            <MenuItem
              icon={<CalendarIcon className="menu-item-icon" />}
              menuItemText="Calendar"
              href="/calendar"
            />
            <MenuItem
              icon={<LiveClassIcon className="menu-item-icon" />}
              menuItemText="Live Class"
              href="/liveclass"
            />
          </ul>
        </div>
        <div className="sidebar-section">
          <h5 className="sidebar-section-title">GENERAL</h5>
          <ul>
            <MenuItem
              icon={<ProfileIcon className="menu-item-icon" />}
              menuItemText="Profile"
              href="/profile"
            />
            <MenuItem
              icon={
                <>
                  <ProfileIcon className="menu-item-icon" />
                  <ProfileIcon className="menu-item-icon" />
                </>
              }
              menuItemText="Team"
              href="/team"
            />
            <MenuItem
              icon={<SettingsIcon className="menu-item-icon" />}
              menuItemText="Settings"
              href="/settings"
            />
            <MenuItem
              icon={<HelpCenterIcon className="menu-item-icon" />}
              menuItemText="Help Center"
              href="/helpcenter"
            />
            <MenuItem
              icon={<LogoutIcon className="menu-item-icon" />}
              menuItemText="Log Out"
              href="#"
            />
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
