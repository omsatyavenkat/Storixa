function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;