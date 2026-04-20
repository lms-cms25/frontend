import Sidebar from "../navigation/Sidebar";
import Image from "next/image";
import {profileImg} from "@/app/assets"

type AppLayoutProps = {
  children: React.ReactNode;
};
export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="content-wrapper">
        <header className="header">
          <div className="header-left-column">
            <input type="text" />
          </div>
          <div className="header-right-column">
            <p>email</p>
            <p>notification</p>
            <div className="header-user">
              <Image src={profileImg} alt=""/>
              <div className="header-user-right">
                <p>Namn Efternamn</p>
                <p>Email</p>
              </div>
            </div>
          </div>
        </header>

        <main className="main">{children}</main>
      </div>
    </div>
  );
};
