import { EyeClosedIcon, EyeOpenIcon } from "@/assets/icon";
import { MouseEvent } from "react";

interface Props {
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  password?: boolean;
  disabled?: boolean;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
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
