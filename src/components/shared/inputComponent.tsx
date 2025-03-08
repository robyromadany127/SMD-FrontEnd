import { EyeClosedIcon, EyeOpenIcon } from "@/assets/icon";
import { MouseEvent, ReactNode } from "react";

interface Props {
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  label?: string | ReactNode;
  type?: string;
  password?: boolean;
  disabled?: boolean;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
  className?: string;
}

export default function InputComponent({
  onChange,
  value,
  placeholder,
  label,
  type,
  password,
  disabled,
  showPassword,
  setShowPassword,
  className,
}: Props) {
  const togglePassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword?.(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="form-label text-gray-900">{label}</label>
      <label className="input">
        <input
          placeholder={placeholder}
          type={type}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
          disabled={disabled}
          className={className}
        />
        {password && (
          <button className="btn btn-icon" onClick={togglePassword}>
            {showPassword ? EyeClosedIcon : EyeOpenIcon}
          </button>
        )}
      </label>
    </div>
  );
}
