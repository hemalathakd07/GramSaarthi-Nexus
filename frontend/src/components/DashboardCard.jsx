export default function DashboardCard({
  children,
  className = '',
  hover = true,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-emerald-500/10'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
