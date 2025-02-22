import { FooterApps } from "@/components/footer/app";
import { FooterHelp } from "@/components/footer/help";
import { FooterInfo } from "@/components/footer/info";
import { Nav } from "@/components/header/nav";
import { NavMenu } from "@/components/header/navMenu";
import { ReactNode } from "react";

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-slate-100 min-h-screen pt-1">
      <Nav />
      <NavMenu />
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-main_px">
        {children}
      </div>
      <div className="bg-black_app mt-8">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-2 justify-between py-4 px-6 pb-5 sm:px-16">
          <FooterInfo />
            <FooterHelp />
            <FooterApps />
        </div>
      </div>
    </div>
  );
};
