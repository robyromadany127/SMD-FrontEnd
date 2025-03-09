import { ChangeEvent, Fragment } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useAuthContext } from "@/auth";
import { useLanguage } from "@/i18n/index";
import { toAbsoluteUrl } from "@/utils";
import { DropdownUserLanguages } from "./DropdownUserLanguages";
import { useSettings } from "@/providers/SettingsProvider";
import { DefaultTooltip, KeenIcon } from "@/components";
import {
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuSeparator,
  MenuArrow,
  MenuIcon,
} from "@/components/menu";

interface IDropdownUserProps {
  menuItemRef: any;
}

const DropdownUser = ({ menuItemRef }: IDropdownUserProps) => {
  const { settings, storeSettings } = useSettings();
  const { logout } = useAuthContext();
  const { isRTL } = useLanguage();
  const { currentUser } = useAuthContext();

  const handleThemeMode = (event: ChangeEvent<HTMLInputElement>) => {
    const newThemeMode = event.target.checked ? "dark" : "light";

    storeSettings({
      themeMode: newThemeMode,
    });
  };

  console.log("currentusersidebar", currentUser);

  const buildHeader = () => {
    return (
      <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
        <div className="flex items-center gap-2">
          {/* <img
            className="size-9 rounded-full border-2 border-success"
            src={toAbsoluteUrl("/media/avatars/300-2.png")}
            alt=""
          /> */}
          <div className="flex flex-col gap-1.5">
            <Link
              to="/user/profile"
              className="text-sm text-gray-800 hover:text-primary font-semibold leading-none"
            >
              {currentUser?.data?.nama_depan}
            </Link>
            <a className="text-xs text-gray-600 hover:text-primary font-medium leading-none">
              {currentUser?.data?.nama_belakang}
            </a>
          </div>
        </div>
      </div>
    );
  };

  const buildMenu = () => {
    return (
      <Fragment>
        <MenuSeparator />
        <div className="flex flex-col">
          <DropdownUserLanguages menuItemRef={menuItemRef} />
          <MenuSeparator />
        </div>
      </Fragment>
    );
  };

  const buildFooter = () => {
    return (
      <div className="flex flex-col">
        <div className="menu-item mb-0.5">
          <div className="menu-link">
            <span className="menu-icon">
              <KeenIcon icon="moon" />
            </span>
            <span className="menu-title">
              <FormattedMessage id="USER.MENU.DARK_MODE" />
            </span>
            <label className="switch switch-sm">
              <input
                name="theme"
                type="checkbox"
                checked={settings.themeMode === "dark"}
                onChange={handleThemeMode}
                value="1"
              />
            </label>
          </div>
        </div>

        <div className="menu-item px-4 py-1.5">
          <a onClick={logout} className="btn btn-sm btn-light justify-center">
            <FormattedMessage id="USER.MENU.LOGOUT" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <MenuSub
      className="menu-default light:border-gray-300 w-[200px] md:w-[250px]"
      rootClassName="p-0"
    >
      {buildHeader()}
      {buildMenu()}
      {buildFooter()}
    </MenuSub>
  );
};

export { DropdownUser };
