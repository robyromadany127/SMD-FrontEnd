import { useState } from "react";
import LayoutLogin from "../../layout/loginLayout";
import { useTranslation } from "react-i18next";
import InputComponent from "@/components/shared/inputComponent";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();

  return (
    <LayoutLogin>
      <div className="card max-w-[390px] w-full">
        <form className="card-body flex flex-col gap-5 p-10" noValidate>
          <InputComponent
            label={t("username")}
            placeholder={t("enterUsername")}
          />
          <InputComponent
            label={t("password")}
            type={showPassword ? "text" : "password"}
            password
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder={t("enterPassword")}
          />

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
