import MainLayout from "@/layout/mainLayout";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <MainLayout>
      <div className="flex-col bg-red-500 h-full">
        <h1>Home Page</h1>
      </div>
    </MainLayout>
  );
}
