// components/BlueGradientBackground.jsx
function BlueGradientBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-500/60">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md z-0" />
      <main className="relative z-10">{children}</main>
    </div>
  );
}

export default BlueGradientBackground;
