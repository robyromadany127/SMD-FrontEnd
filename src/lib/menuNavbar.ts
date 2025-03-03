import { useTranslation } from "react-i18next";

export const useMenuNavbar = () => {
  const { t } = useTranslation();
  return [{ label: t("user"), path: "/user" }];
};
