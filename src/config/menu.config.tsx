import { type TMenuConfig } from "@/components/menu";
import MemoizedFormattedMessage from "react-intl/src/components/message";

export const MENU_SIDEBAR: TMenuConfig = [
  // {
  //   title: <MemoizedFormattedMessage id="dashboard" />,
  //   path: "/dashboard",
  // },
  {
    title: <MemoizedFormattedMessage id="admin" />,
    icon: "profile-circle",
    children: [
      {
        title: <MemoizedFormattedMessage id="country" />,
        path: "/admin/country",
      },
      {
        title: <MemoizedFormattedMessage id="province" />,
        path: "/admin/province",
      },
      {
        title: <MemoizedFormattedMessage id="city" />,
        path: "/admin/city",
      },
      {
        title: <MemoizedFormattedMessage id="district" />,
        path: "/admin/district",
      },
      {
        title: <MemoizedFormattedMessage id="subdistrict" />,
        path: "/admin/subdistrict",
      },
      {
        title: <MemoizedFormattedMessage id="religion" />,
        path: "/admin/religion",
      },
      {
        title: <MemoizedFormattedMessage id="familiar source" />,
        path: "/admin/familiar-source",
      },
      {
        title: <MemoizedFormattedMessage id="blood type" />,
        path: "/admin/blood-type",
      },
      {
        title: <MemoizedFormattedMessage id="social media" />,
        path: "/admin/social-media",
      },
      {
        title: <MemoizedFormattedMessage id="modul" />,
        path: "/admin/modul",
      },
    ],
  },
  {
    title: <MemoizedFormattedMessage id="human resource" />,
    icon: "people",
    children: [
      {
        title: <MemoizedFormattedMessage id="staff" />,
        path: "/hr/staff",
      },
      {
        title: <MemoizedFormattedMessage id="preferences" />,
        path: "/hr/preferences",
      },
    ],
  },
  {
    title: <MemoizedFormattedMessage id="volunteer" />,
    icon: "user-tick",
    children: [
      {
        title: <MemoizedFormattedMessage id="volunteer" />,
        path: "/volunteer/relawan",
      },
      {
        title: <MemoizedFormattedMessage id="vendor" />,
        path: "/volunteer/vendor",
      },
    ],
  },
  {
    title: <MemoizedFormattedMessage id="finance" />,
    icon: "bank",
    children: [
      {
        title: <MemoizedFormattedMessage id="bank transfer" />,
        path: "/keuangan/bank-transfer",
      },
      {
        title: <MemoizedFormattedMessage id="cash transfer" />,
        path: "/keuangan/cash-transfer",
      },
      {
        title: <MemoizedFormattedMessage id="preferences" />,
        path: "/keuangan/preferences",
      },
    ],
  },
  {
    title: <MemoizedFormattedMessage id="donor" />,
    icon: "user-tick",
    children: [
      {
        title: <MemoizedFormattedMessage id="donor" />,
        path: "/donor/donor",
      },
      {
        title: <MemoizedFormattedMessage id="preferences" />,
        path: "/donor/preferences",
      },
    ],
  },
  {
    title: <MemoizedFormattedMessage id="donation" />,
    icon: "folder",
    children: [
      {
        title: <MemoizedFormattedMessage id="donation acceptance" />,
        path: "/donasi/donasi-acceptance",
      },
      {
        title: <MemoizedFormattedMessage id="natural acceptance" />,
        path: "/donasi/natural-acceptance",
      },
      {
        title: <MemoizedFormattedMessage id="online acceptance" />,
        path: "/donasi/online-acceptance",
      },
      {
        title: <MemoizedFormattedMessage id="program" />,
        path: "/donasi/program",
      },
      {
        title: <MemoizedFormattedMessage id="preferences" />,
        path: "/donasi/preferences",
      },
    ],
  },
  {
    title: <MemoizedFormattedMessage id="cash advance request" />,
    icon: "save-deposit",
    children: [
      {
        title: <MemoizedFormattedMessage id="cash advance request" />,
        path: "/car/cash-advance-request",
      },
      {
        title: <MemoizedFormattedMessage id="preferences" />,
        path: "/car/preferences",
      },
    ],
  },
  {
    title: <MemoizedFormattedMessage id="accounting" />,
    icon: "financial-schedule",
    children: [
      {
        title: <MemoizedFormattedMessage id="account" />,
        path: "/akuntansi/account",
      },
      {
        title: <MemoizedFormattedMessage id="jurnal" />,
        path: "/akuntansi/jurnal",
      },
    ],
  },
];

export const MENU_MEGA: TMenuConfig = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Profiles",
    children: [
      {
        title: "Profiles",
        children: [
          {
            children: [
              {
                title: "Default",
                icon: "badge",
                path: "/public-profile/profiles/default",
              },
              {
                title: "Creator",
                icon: "coffee",
                path: "/public-profile/profiles/creator",
              },
              {
                title: "Company",
                icon: "abstract-41",
                path: "/public-profile/profiles/company",
              },
              {
                title: "NFT",
                icon: "bitcoin",
                path: "/public-profile/profiles/nft",
              },
              {
                title: "Blogger",
                icon: "message-text",
                path: "/public-profile/profiles/blogger",
              },
              {
                title: "CRM",
                icon: "devices",
                path: "/public-profile/profiles/crm",
              },
              {
                title: "Gamer",
                icon: "ghost",
                path: "/public-profile/profiles/gamer",
              },
            ],
          },
          {
            children: [
              {
                title: "Feeds",
                icon: "book",
                path: "/public-profile/profiles/feeds",
              },
              {
                title: "Plain",
                icon: "files",
                path: "/public-profile/profiles/plain",
              },
              {
                title: "Modal",
                icon: "mouse-square",
                path: "/public-profile/profiles/modal",
              },
              {
                title: "Freelancer",
                icon: "financial-schedule",
                path: "#",
                disabled: true,
              },
              {
                title: "Developer",
                icon: "technology-4",
                path: "#",
                disabled: true,
              },
              {
                title: "Team",
                icon: "users",
                path: "#",
                disabled: true,
              },
              {
                title: "Events",
                icon: "calendar-tick",
                path: "#",
                disabled: true,
              },
            ],
          },
        ],
      },
      {
        title: "Other Pages",
        children: [
          {
            children: [
              {
                title: "Projects - 3 Columns",
                icon: "element-6",
                path: "/public-profile/projects/3-columns",
              },
              {
                title: "Projects - 2 Columns",
                icon: "element-4",
                path: "/public-profile/projects/2-columns",
              },
              {
                title: "Works",
                icon: "office-bag",
                path: "/public-profile/works",
              },
              {
                title: "Teams",
                icon: "people",
                path: "/public-profile/teams",
              },
              {
                title: "Network",
                icon: "icon",
                path: "/public-profile/network",
              },
              {
                title: "Activity",
                icon: "chart-line-up-2",
                path: "/public-profile/activity",
              },
              {
                title: "Campaigns - Card",
                icon: "element-11",
                path: "/public-profile/campaigns/card",
              },
            ],
          },
          {
            children: [
              {
                title: "Campaigns - List",
                icon: "kanban",
                path: "/public-profile/campaigns/list",
              },
              {
                title: "Empty",
                icon: "file-sheet",
                path: "/public-profile/empty",
              },
              {
                title: "Documents",
                icon: "document",
                path: "#",
                disabled: true,
              },
              {
                title: "Badges",
                icon: "award",
                path: "#",
                disabled: true,
              },
              {
                title: "Awards",
                icon: "gift",
                path: "#",
                disabled: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "My Account",
    children: [
      {
        title: "General Pages",
        children: [
          {
            title: "Integrations",
            icon: "technology-2",
            path: "/account/integrations",
          },
          {
            title: "Notifications",
            icon: "notification-1",
            path: "/account/notifications",
          },
          { title: "API Keys", icon: "key", path: "/account/api-keys" },
          { title: "Appearance", icon: "eye", path: "/account/appearance" },
          {
            title: "Invite a Friend",
            icon: "user-tick",
            path: "/account/invite-a-friend",
          },
          { title: "Activity", icon: "support", path: "/account/activity" },
          { title: "Brand", icon: "verify", disabled: true },
          { title: "Get Paid", icon: "euro", disabled: true },
        ],
      },
      {
        title: "Other pages",
        children: [
          {
            title: "Account Home",
            children: [
              { title: "Get Started + ", path: "/account/home/get-started" },
              { title: "User Profile", path: "/account/home/user-profile" },
              {
                title: "Company Profile",
                path: "/account/home/company-profile",
              },
              { title: "With Sidebar", path: "/account/home/settings-sidebar" },
              {
                title: "Enterprise",
                path: "/account/home/settings-enterprise",
              },
              { title: "Plain", path: "/account/home/settings-plain" },
              { title: "Modal", path: "/account/home/settings-modal" },
            ],
          },
          {
            title: "Billing",
            children: [
              { title: "Basic Billing", path: "/account/billing/basic" },
              { title: "Enterprise", path: "/account/billing/enterprise" },
              { title: "Plans", path: "/account/billing/plans" },
              { title: "Billing History", path: "/account/billing/history" },
              { title: "Tax Info", disabled: true },
              { title: "Invoices", disabled: true },
              { title: "Gateaways", disabled: true },
            ],
          },
          {
            title: "Security",
            children: [
              { title: "Get Started", path: "/account/security/get-started" },
              {
                title: "Security Overview",
                path: "/account/security/overview",
              },
              {
                title: "IP Addresses",
                path: "/account/security/allowed-ip-addresses",
              },
              {
                title: "Privacy Settings",
                path: "/account/security/privacy-settings",
              },
              {
                title: "Device Management",
                path: "/account/security/device-management",
              },
              {
                title: "Backup & Recovery",
                path: "/account/security/backup-and-recovery",
              },
              {
                title: "Current Sessions",
                path: "/account/security/current-sessions",
              },
              { title: "Security Log", path: "/account/security/security-log" },
            ],
          },
          {
            title: "Members & Roles",
            children: [
              { title: "Teams Starter", path: "/account/members/team-starter" },
              { title: "Teams", path: "/account/members/teams" },
              { title: "Team Info", path: "/account/members/team-info" },
              {
                title: "Members Starter",
                path: "/account/members/members-starter",
              },
              { title: "Team Members", path: "/account/members/team-members" },
              {
                title: "Import Members",
                path: "/account/members/import-members",
              },
              { title: "Roles", path: "/account/members/roles" },
              {
                title: "Permissions - Toggler",
                path: "/account/members/permissions-toggle",
              },
              {
                title: "Permissions - Check",
                path: "/account/members/permissions-check",
              },
            ],
          },
          {
            title: "Other Pages",
            children: [
              { title: "Integrations", path: "/account/integrations" },
              { title: "Notifications", path: "/account/notifications" },
              { title: "API Keys", path: "/account/api-keys" },
              { title: "Appearance", path: "/account/appearance" },
              { title: "Invite a Friend", path: "/account/invite-a-friend" },
              { title: "Activity", path: "/account/activity" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Network",
    children: [
      {
        title: "General Pages",
        children: [
          { title: "Get Started", icon: "flag", path: "/network/get-started" },
          { title: "Colleagues", icon: "users", path: "#", disabled: true },
          { title: "Donators", icon: "heart", path: "#", disabled: true },
          { title: "Leads", icon: "abstract-21", path: "#", disabled: true },
        ],
      },
      {
        title: "Other pages",
        children: [
          {
            title: "User Cards",
            children: [
              { title: "Mini Cards", path: "/network/user-cards/mini-cards" },
              { title: "Team Members", path: "/network/user-cards/team-crew" },
              { title: "Authors", path: "/network/user-cards/author" },
              { title: "NFT Users", path: "/network/user-cards/nft" },
              { title: "Social Users", path: "/network/user-cards/social" },
              { title: "Gamers", path: "#", disabled: true },
            ],
          },
          {
            title: "User Base",
            badge: "Datatables",
            children: [
              { title: "Team Crew", path: "/network/user-table/team-crew" },
              { title: "App Roster", path: "/network/user-table/app-roster" },
              {
                title: "Market Authors",
                path: "/network/user-table/market-authors",
              },
              { title: "SaaS Users", path: "/network/user-table/saas-users" },
              {
                title: "Store Clients",
                path: "/network/user-table/store-clients",
              },
              { title: "Visitors", path: "/network/user-table/visitors" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Authentication",
    children: [
      {
        title: "General pages",
        children: [
          {
            title: "Classic Layout",
            children: [
              { title: "Sign In", path: "/auth/classic/login" },
              { title: "Sign Up", path: "/auth/classic/signup" },
              { title: "2FA", path: "/auth/classic/2fa" },
              { title: "Check Email", path: "/auth/classic/check-email" },
              {
                title: "Reset Password",
                children: [
                  {
                    title: "Enter Email",
                    path: "/auth/classic/reset-password/enter-email",
                  },
                  {
                    title: "Check Email",
                    path: "/auth/classic/reset-password/check-email",
                  },
                  {
                    title: "Change Password",
                    path: "/auth/classic/reset-password/change",
                  },
                  {
                    title: "Password is Changed",
                    path: "/auth/classic/reset-password/changed",
                  },
                ],
              },
            ],
          },
          {
            title: "Branded Layout",
            children: [
              { title: "Sign In", path: "/auth/login" },
              { title: "Sign Up", path: "/auth/signup" },
              { title: "2FA", path: "/auth/2fa" },
              { title: "Check Email", path: "/auth/check-email" },
              {
                title: "Reset Password",
                children: [
                  {
                    title: "Enter Email",
                    path: "/auth/reset-password/enter-email",
                  },
                  {
                    title: "Check Email",
                    path: "/auth/reset-password/check-email",
                  },
                  {
                    title: "Change Password",
                    path: "/auth/reset-password/change",
                  },
                  {
                    title: "Password is Changed",
                    path: "/auth/reset-password/changed",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Other Pages",
        children: [
          {
            title: "Welcome Message",
            icon: "like-2",
            path: "/auth/welcome-message",
          },
          {
            title: "Account Deactivated",
            icon: "shield-cross",
            path: "/auth/account-deactivated",
          },
          { title: "Error 404", icon: "message-question", path: "/error/404" },
          { title: "Error 500", icon: "information", path: "/error/500" },
        ],
      },
    ],
  },
  {
    title: "Help",
    children: [
      {
        title: "Getting Started",
        icon: "coffee",
        path: "https://keenthemes.com/metronic/tailwind/docs/getting-started/installation",
      },
      {
        title: "Support Forum",
        icon: "information",
        children: [
          {
            title: "All Questions",
            icon: "questionnaire-tablet",
            path: "https://devs.keenthemes.com",
          },
          {
            title: "Popular Questions",
            icon: "star",
            path: "https://devs.keenthemes.com/popular",
          },
          {
            title: "Ask Question",
            icon: "message-question",
            path: "https://devs.keenthemes.com/question/create",
          },
        ],
      },
      {
        title: "Licenses & FAQ",
        tooltip: {
          title: "Learn more about licenses",
          placement: "right",
        },
        icon: "subtitle",
        path: "https://keenthemes.com/metronic/tailwind/docs/getting-started/license",
      },
      {
        title: "Documentation",
        icon: "questionnaire-tablet",
        path: "https://keenthemes.com/metronic/tailwind/docs",
      },
      { separator: true },
      {
        title: "Contact Us",
        icon: "share",
        path: "https://keenthemes.com/contact",
      },
    ],
  },
];

export const MENU_ROOT: TMenuConfig = [
  {
    title: <MemoizedFormattedMessage id="dashboard" />,
    icon: "home-3",
    path: "/dashboard",
  },
];
