"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";



type MenuItemProps = {
  icon: React.ReactNode;
  menuItemText: string;
  href: string;
};

const MenuItem = ({ icon, menuItemText, href }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  useEffect(() => {
    if(!isActive) return;
    // console.log(href);
    console.log(pathname);
    
  })
  
  return (
    <li>
      <Link href={href} className={`menu-item ${isActive ? "active" : ""}`}>
        <div className="menu-item-icon-bg">{icon}</div>
        <p>{menuItemText}</p>
      </Link>
    </li>
  );
};

export default MenuItem;
