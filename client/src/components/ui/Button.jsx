function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;