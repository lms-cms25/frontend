import MenuItem from "./MenuItem";
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
              menuItemText="Admin Dashboard"
              href="/admin"
            />
          </ul>
        </div>
        <div className="sidebar-section">
          <h5 className="sidebar-section-title">PROGRAMS</h5>
          <ul>
            <MenuItem
              icon={<ProfileIcon className="menu-item-icon" />}
              menuItemText="Programs"
              href="/admin/programs/"
            />
            <MenuItem
              icon={<ProfileIcon className="menu-item-icon" />}
              menuItemText="Add Program"
              href="/admin/programs/add"
            />
            <MenuItem
              icon={<ProfileIcon className="menu-item-icon" />}
              menuItemText="Edit Program"
              href="/admin/programs/edit"
            />
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
