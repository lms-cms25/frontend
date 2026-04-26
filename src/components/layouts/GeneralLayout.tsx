"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../../css/layouts/general-layout.module.css";

const NAV_ITEMS = [
  { path: "/profile", label: "General" },
  { path: "/team", label: "Team" },
  { path: "/settings", label: "Settings" },
  { path: "/settings/password", label: "Password" },
  { path: "/settings/notification", label: "Notification" },
];

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathNameHeader =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2).split("/")[0];
  return (
    <div>
      <h1 className={styles.header}>{pathNameHeader}</h1>
      <nav >
        <ul className={styles.navContainer}>
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.navLink} ${pathname === item.path ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
}
