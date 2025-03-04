import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Drawer } from "@/components";
import { HamburgerIcon } from "@/assets/icon";
import { useTranslation } from "react-i18next";
import { useMenuNavbar } from "@/lib/menuNavbar";
import { ChevronRight, ChevronDown } from "lucide-react";
import LanguageSwitcher from "@/components/shared/languageSwitcher";

export default function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();

  const menuNavbar = useMenuNavbar();

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <div className="flex h-screen justify-center">
      {/* Sidebar Drawer */}
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={t("menu")}
        width={300}
      >
        {/* Sidebar content */}
        <nav className="flex flex-col gap-4 p-4">
          {menuNavbar?.map((item, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-blue-600 font-semibold"
                onClick={() => toggleSubmenu(item.label)}
              >
                <a href={item.path}>{item.label}</a>
                {item.submenu &&
                  (openMenu === item.label ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  ))}
              </div>
              {item.submenu && openMenu === item.label && (
                <ul className="ml-4 mt-2 space-y-1 border-l border-gray-300 pl-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.path}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                      >
                        <ChevronRight className="w-3 h-3" /> {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </Drawer>

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full bg-white">
        {/* Navbar / Header */}
        <header className="flex items-center justify-between py-2 px-6 bg-white bg-gray-200">
          <div className="flex items-center">
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-600"
            >
              {HamburgerIcon}
            </IconButton>
            <h1 className="ml-4 text-base font-semibold">My App</h1>
          </div>
          <LanguageSwitcher />
        </header>

        {/* Page Content */}
        <main className="flex flex-col flex-1 p-6  w-full mx-auto gap-4">
          <h1 className="text-sm md:text-base font-semibold text-center">
            {title}
          </h1>
          {children}
        </main>
      </div>
    </div>
  );
}
