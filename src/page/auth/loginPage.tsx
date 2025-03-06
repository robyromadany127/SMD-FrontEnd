import { useState } from "react";
import LayoutLogin from "../../layout/loginLayout";
import InputComponent from "@/components/shared/inputComponent";
import { useIntl } from "react-intl";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const intl = useIntl();

  return (
    <LayoutLogin>
      <div className="card max-w-[390px] w-full">
        <form className="card-body flex flex-col gap-5 p-10" noValidate>
          <InputComponent
            label={intl.formatMessage({ id: "username" })}
            placeholder={intl.formatMessage({ id: "enterUsername" })}
          />
          <InputComponent
            label={intl.formatMessage({ id: "password" })}
            type={showPassword ? "text" : "password"}
            password
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder={intl.formatMessage({ id: "enterPassword" })}
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
