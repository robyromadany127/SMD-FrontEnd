import clsx from "clsx";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "@/auth/useAuthContext";
import { Alert, KeenIcon } from "@/components";
import { useLayout } from "@/providers";
import { AxiosError } from "axios";
import LayoutLogin from "@/layout/loginLayout";
import { mainColor } from "@/components/shared/color";
import { useIntl } from "react-intl";

const initialValues = {
  email: "",
};

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
});

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const { requestPasswordResetLink } = useAuthContext();
  const { currentLayout } = useLayout();
  const navigate = useNavigate();
  const intl = useIntl();

  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setHasErrors(undefined);
      try {
        if (!requestPasswordResetLink) {
          throw new Error("JWTProvider is required for this form.");
        }
        await requestPasswordResetLink(values.email);
        setHasErrors(false);
        setLoading(false);
        const params = new URLSearchParams();
        params.append("email", values.email);
        navigate({
          pathname:
            currentLayout?.name === "auth-branded"
              ? "/auth/reset-password/check-email"
              : "/auth/classic/reset-password/check-email",
          search: params.toString(),
        });
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          setStatus(error.response.data.message);
        } else {
          setStatus("Password reset failed. Please try again.");
        }
        setHasErrors(true);
        setLoading(false);
        setSubmitting(false);
      }
    },
  });
  return (
    <LayoutLogin>
      <div className={`card max-w-[390px] w-full bg-[#FFFCF1]`}>
        <form
          className="card-body flex flex-col gap-5 p-10"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              {intl.formatMessage({ id: "your_email" })}
            </h3>
            <span className="text-2sm text-gray-600 font-medium">
              {intl.formatMessage({
                id: "enter_your_email_to_reset_your_password",
              })}
            </span>
          </div>

          {hasErrors && <Alert variant="danger">{formik.status}</Alert>}

          {hasErrors === false && (
            <Alert variant="success">
              {intl.formatMessage({
                id: "password_reset_link_sent.please_check_your_email_to_proceed",
              })}
            </Alert>
          )}

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              {intl.formatMessage({ id: "email" })}
            </label>
            <label className="input">
              <input
                type="email"
                placeholder="email@email.com"
                autoComplete="off"
                {...formik.getFieldProps("email")}
                className={clsx(
                  "form-control bg-transparent",
                  { "is-invalid": formik.touched.email && formik.errors.email },
                  {
                    "is-valid": formik.touched.email && !formik.errors.email,
                  }
                )}
              />
            </label>
            {formik.touched.email && formik.errors.email && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-5 items-stretch">
            <button
              type="submit"
              className="btn btn-primary flex justify-center grow"
              disabled={loading || formik.isSubmitting}
            >
              {loading
                ? intl.formatMessage({ id: "loading" })
                : intl.formatMessage({ id: "continue" })}
            </button>

            <Link
              to={"/"}
              className="flex items-center justify-center text-sm gap-2 text-gray-700 hover:text-primary"
            >
              <KeenIcon icon="black-left" />
              {intl.formatMessage({ id: "back_to_login" })}
            </Link>
          </div>
        </form>
      </div>
    </LayoutLogin>
  );
};

export { ResetPassword };
