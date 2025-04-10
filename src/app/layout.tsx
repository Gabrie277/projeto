import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import BiaChatWidget from "@/app/components/BiaChatWidget"; // Nome atualizado aqui
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Solução de Tecnologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Soluções de tecnologia sob medida para o seu negócio." />
        <link rel="icon" href="/ynnothivix.jpg" type="image/jpg" />
      </head>
      <body className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BiaChatWidget /> {/* Aqui é onde a Bia aparece em todas as páginas */}
      </body>
    </html>
  );
}
