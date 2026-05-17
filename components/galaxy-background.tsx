export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Starry base */}
      <div className="galaxy-grid animate-float-bg twinkle-effect" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          backgroundPosition: "center center",
        }}
      />

      {/* Radial depth gradient */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/20 to-gray-900/60" />
    </div>
  )
}
