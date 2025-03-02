import { MouseEvent, useState } from "react";
import LayoutLogin from "../../layout/loginLayout";
import { useTranslation } from "react-i18next";
import { EyeClosedIcon, EyeOpenIcon } from "../../assets/icon";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();
  const togglePassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <LayoutLogin>
      <div className="card max-w-[390px] w-full">
        <form className="card-body flex flex-col gap-5 p-10" noValidate>
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">{t("username")}</label>
            <label className="input">
              <input placeholder={t("enterUsername")} />
            </label>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <label className="form-label text-gray-900">
                {t("password")}
              </label>
            </div>
            <label className="input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t("enterPassword")}
              />
              <button className="btn btn-icon" onClick={togglePassword}>
                {showPassword ? EyeClosedIcon : EyeOpenIcon}
              </button>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary flex justify-center grow h-8"
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>
        </form>
      </div>
    </LayoutLogin>
  );
}
