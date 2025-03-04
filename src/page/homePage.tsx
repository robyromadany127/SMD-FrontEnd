import MainLayout from "@/layout/mainLayout";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "SMD" + " - " + t("dashboard");
  }, []);
  return (
    <MainLayout title={t("dashboard")}>
      <div className="flex-col">{t("dashboard")}</div>
    </MainLayout>
  );
}
