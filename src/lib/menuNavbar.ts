import { useTranslation } from "react-i18next";

export const useMenuNavbar = () => {
  const { t } = useTranslation();
  return [
    {
      label: t("dashboard"),
      path: "/dashboard",
    },
    {
      label: t("admin"),
      // path: "/admin",
      submenu: [
        { label: t("country"), path: "/admin/country" },
        { label: t("province"), path: "/admin/province" },
        { label: t("city"), path: "/admin/city" },
        { label: t("district"), path: "/admin/district" },
        { label: t("subdistrict"), path: "/admin/subdistrict" },
        { label: t("religion"), path: "/admin/religion" },
        { label: t("familiar source"), path: "/admin/familiar-source" },
        { label: t("blood type"), path: "/admin/blood-type" },
        { label: t("social media"), path: "/admin/social-media" },
        { label: t("modul"), path: "/admin/modul" },
      ],
    },
    {
      label: t("human resource"),
      // path: "/hr",
      submenu: [
        { label: t("staff"), path: "/hr/staff" },
        { label: t("preferences"), path: "/hr/preferences" },
      ],
    },
    {
      label: t("volunteer"),
      // path: "/volunteer",
      submenu: [
        { label: t("volunteer"), path: "/volunteer/relawan" },
        { label: t("vendor"), path: "/volunteer/vendor" },
      ],
    },
    {
      label: t("finance"),
      // path: "/keuangan",
      submenu: [
        { label: t("bank transfer"), path: "/keuangan/bank-transfer" },
        { label: t("cash transfer"), path: "/keuangan/cash-transfer" },
        { label: t("preferences"), path: "/keuangan/preferences" },
      ],
    },
    {
      label: t("donor"),
      // path: "/donatur",
      submenu: [
        { label: t("donor"), path: "/donor/donor" },
        { label: t("preferences"), path: "/donatur/preferences" },
      ],
    },
    {
      label: t("donation"),
      // path: "/donasi",
      submenu: [
        {
          label: t("donation acceptance"),
          path: "/donasi/donation-acceptance",
        },
        { label: t("natural acceptance"), path: "/donasi/natural-acceptance" },
        { label: t("online acceptance"), path: "/donasi/online-acceptance" },
        { label: t("program"), path: "/donasi/program" },
        { label: t("preferences"), path: "/donasi/preferences" },
      ],
    },
    {
      label: t("cash advance request"),
      // path: "/car",
      submenu: [
        { label: t("cash advance request"), path: "/car/cash-advance-request" },
        { label: t("preferences"), path: "/car/preferences" },
      ],
    },
    {
      label: t("accounting"),
      // path: "/akunting",
      submenu: [
        { label: t("account"), path: "/accounting/account" },
        { label: t("jurnal"), path: "/accounting/jurnal" },
      ],
    },
  ];
};
