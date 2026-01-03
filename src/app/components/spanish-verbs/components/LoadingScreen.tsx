export function LoadingScreen() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent" />
      <div className="text-center relative z-10">
        <div className="text-gray-600">Loading...</div>
      </div>
    </div>
  );
}
