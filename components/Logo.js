export default function Logo({ variant = "full", height = 36 }) {
  const icon = (
    <svg
      width={height}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="hs-grad" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#0B4FC2" />
        </linearGradient>
      </defs>

      {/* escudo — segurança */}
      <path
        d="M24 3.5 L41 9.5 V21.5 C41 32.5 34 41 24 44.5 C14 41 7 32.5 7 21.5 V9.5 Z"
        fill="url(#hs-grad)"
        stroke="#C6CCD6"
        strokeWidth="1"
      />

      {/* nós de circuito — tecnologia */}
      <circle cx="24" cy="8.5" r="1.4" fill="#E7EBF2" />
      <circle cx="12.5" cy="15" r="1.2" fill="#C6CCD6" />
      <circle cx="35.5" cy="15" r="1.2" fill="#C6CCD6" />

      {/* raio — energia / alta tecnologia */}
      <path
        d="M26.5 12.5 L18 25.5 H23 L21 34.5 L31.5 20.5 H25.5 Z"
        fill="#FFFFFF"
      />
    </svg>
  );

  if (variant === "icon") return icon;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {icon}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: height * 0.52,
            letterSpacing: "-0.01em",
            color: "#F5F7FA",
          }}
        >
          Hyper<span style={{ color: "#3B82F6" }}>Store</span>
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: Math.max(height * 0.185, 8),
            letterSpacing: "0.14em",
            color: "#8891A3",
            marginTop: 2,
          }}
        >
          TECNOLOGIA · SEGURANÇA
        </span>
      </div>
    </div>
  );
}
