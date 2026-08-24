import "./globals.css";

export const metadata = {
  title: "Modo Estudo Inteligente",
  description:
    "Central acadêmica para organizar, pesquisar e gerenciar conteúdos de estudo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
