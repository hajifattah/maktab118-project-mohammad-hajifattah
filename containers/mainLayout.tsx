import { FooterApps } from "@/components/footer/app";
import { FooterHelp } from "@/components/footer/help";
import { FooterInfo } from "@/components/footer/info";
import { Nav } from "@/components/header/nav";
import { NavMenu } from "@/components/header/navMenu";
import { ReactNode } from "react";

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav />
      <NavMenu />
      {children}
      <div>
        <FooterApps/>
        <FooterHelp/>
        <FooterInfo/>
      </div>
    </>
  );
};
