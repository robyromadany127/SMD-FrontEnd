import { MouseEvent, useEffect, useRef, useState } from "react";
import LayoutLogin from "../../../layout/loginLayout";
import { useIntl } from "react-intl";
import { Alert, MenuSeparator, ScreenLoader } from "@/components";
import { DropdownUserLanguages } from "@/partials/dropdowns/user";
import { useAuthContext } from "@/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import clsx from "clsx";
import { EyeClosedIcon, EyeOpenIcon } from "@/assets/icon";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { login, auth } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const intl = useIntl();

  const appAlias = import.meta.env.VITE_APP_ALIAS || "SMD";

  const menuItemRef = useRef<any>(null);

  useEffect(() => {
    document.title = `${appAlias} - Login`;
  }, [appAlias]);

  useEffect(() => {
    if (auth) {
      return navigate("/dashboard", { replace: true });
    }
  }, [auth]);

  const loginSchema = Yup.object().shape({
    nomor_induk_karyawan: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({ id: "required.employeeidentificationnumber" })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(intl.formatMessage({ id: "required.password" })),
  });

  const formik = useFormik({
    initialValues: {
      nomor_induk_karyawan: "1111111111",
      password: "rahasia",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);

      try {
        if (!login) {
          throw new Error("JWTProvider is required for this form.");
        }

        await login(values.nomor_induk_karyawan, values.password);

        navigate("/dashboard", { replace: true });
      } catch {
        setStatus(intl.formatMessage({ id: "error.internalservererror" }));
        setSubmitting(false);
      }
      setLoading(false);
    },
  });

  const togglePassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <LayoutLogin>
      <div className="card max-w-[390px] w-full">
        <div className="p-10">
          <MenuSeparator />
          <div className="flex flex-col">
            <DropdownUserLanguages menuItemRef={menuItemRef} />
            <MenuSeparator />
          </div>
        </div>
        <form
          className="card-body flex flex-col gap-5 p-10"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {formik.status && <Alert variant="danger">{formik.status}</Alert>}

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              {intl.formatMessage({ id: "employeeidentificationnumber" })}
            </label>
            <label className="input">
              <input
                placeholder={intl.formatMessage({
                  id: "enteremployeeidentificationnumber",
                })}
                autoComplete="off"
                {...formik.getFieldProps("nomor_induk_karyawan")}
                className={clsx("form-control", {
                  "is-invalid":
                    formik.touched.nomor_induk_karyawan &&
                    formik.errors.nomor_induk_karyawan,
                })}
              />
            </label>
            {formik.touched.nomor_induk_karyawan &&
              formik.errors.nomor_induk_karyawan && (
                <span role="alert" className="text-danger text-xs mt-1">
                  {formik.errors.nomor_induk_karyawan}
                </span>
              )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <label className="form-label text-gray-900">
                {intl.formatMessage({ id: "password" })}
              </label>
              <Link to={"/reset-password"} className="text-2sm link shrink-0">
                Forgot Password?
              </Link>
            </div>
            <label className="input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={intl.formatMessage({ id: "enterPassword" })}
                autoComplete="off"
                {...formik.getFieldProps("password")}
                className={clsx("form-control", {
                  "is-invalid":
                    formik.touched.password && formik.errors.password,
                })}
              />
              <button className="btn btn-icon" onClick={togglePassword}>
                {showPassword ? EyeClosedIcon : EyeOpenIcon}
              </button>
            </label>
            {formik.touched.password && formik.errors.password && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary flex justify-center grow h-8"
          >
            {loading
              ? intl.formatMessage({ id: "please wait" })
              : intl.formatMessage({ id: "sign in" })}
          </button>
        </form>
      </div>
    </LayoutLogin>
  );
}
