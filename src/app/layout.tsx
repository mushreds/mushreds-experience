import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mushreds | IA Marketing Global",
  description: "Automação e Criação de Mídia via IA de Alta Tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-black">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
