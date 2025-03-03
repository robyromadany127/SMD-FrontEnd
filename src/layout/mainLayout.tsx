import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Drawer } from "@/components";
import { HamburgerIcon } from "@/assets/icon";
import { useTranslation } from "react-i18next";
import { useMenuNavbar } from "@/lib/menuNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();

  const menuNavbar = useMenuNavbar();

  return (
    <div className="flex h-screen">
      {/* Sidebar Drawer */}
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={t("menu")}
        width={300}
      >
        {/* Sidebar content */}
        <nav className="flex flex-col gap-4 p-4">
          {menuNavbar?.map((item, index) => {
            return (
              <a
                href={item.path}
                className="text-gray-700 hover:text-blue-600"
                key={index}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </Drawer>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar / Header */}
        <header className="flex items-center justify-between py-2 px-4 bg-white shadow">
          <div className="flex items-center">
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-600"
            >
              {HamburgerIcon}
            </IconButton>
            <h1 className="ml-4 text-base font-semibold">My App</h1>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
