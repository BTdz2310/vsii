import "src/app/globals.css";
import Header from "src/components/Header";
import { ThemeProvider } from "src/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Sarpanch:wght@400;500;600;700;800;900&family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased bg-white dark:bg-dark dark:text-[#eaeaea]`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* pt-16 */}
          <main className='min-h-[2000px] font-space-grotesk w-screen'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
