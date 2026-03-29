import { FaCircleNotch } from "react-icons/fa";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: ButtonVariant;
}

const Button = ({
  type = "button",
  onClick,
  loading = false,
  children,
  className = "",
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "hover:bg-purple-700 text-white bg-purple-900 shadow-purple-500/20 cursor-pointer",
    secondary:
      "border-[2px] hover:bg-purple-900 hover:text-white border-purple-900 bg-[#F7F8FA] text-gray-900  cursor-pointer",
  };

  const baseStyles =
    "flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-md transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md text-sm md:text-base";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <>
          <FaCircleNotch className="animate-spin h-5 w-5 text-current" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
