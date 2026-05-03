"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";



type MenuItemProps = {
  icon: React.ReactNode;
  menuItemText: string;
  href: string;
  onClick?: () => void;
};

const MenuItem = ({ icon, menuItemText, href, onClick }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = href && href !== "#" 
    ? (href === "/" ? pathname === "/" : pathname.startsWith(href)) 
    : false;

  // Om vi har en onClick men inget href, rendera som en knapp/div istället för Link
  const content = (
    <div className={`menu-item ${isActive ? "active" : ""}`} onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="menu-item-icon-bg">{icon}</div>
      <p>{menuItemText}</p>
    </div>
  );

  if (href && !onClick) {
    return (
      <li>
        <Link href={href}>
          {content}
        </Link>
      </li>
    );
  }

  return <li>{content}</li>;
};

export default MenuItem;
