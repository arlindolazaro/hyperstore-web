import "./globals.css";

export const metadata = {
  title: "HyperStore — Tecnologia e Qualidade",
  description: "Loja online de gadgets e tecnologia em Moçambique.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-MZ">
      <body>{children}</body>
    </html>
  );
}
