"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = {
  icon: string;
  menuItemText: string;
  href: string;
};

const MenuItem = ({ icon, menuItemText, href }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href} className={`menu-item ${isActive ? "active" : ""}`}>
        <div className="menu-item-icon-bg">
          <img src={icon} alt="" className="menu-item-icon" />
        </div>
        <p>{menuItemText}</p>
      </Link>
    </li>
  );
};

export default MenuItem;
