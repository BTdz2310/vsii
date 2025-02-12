import "src/app/globals.css";
// import AuthBg from "/images/auth-bg.png"
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Sarpanch:wght@400;500;600;700;800;900&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={` antialiased bg-white dark:bg-dark dark:text-[#eaeaea]`}
        suppressHydrationWarning={true}
      >
        <main className="min-h-screen font-space-grotesk w-screen flex items-center justify-center">
          <Image src="/images/auth-bg.png" width={0} height={0} sizes="100vw" alt="" className="absolute -z-10 top-0 left-0 w-full h-full object-cover" />
          <div className="w-full rounded-lg backdrop-blur-2xl shadow-3xl mx-2 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
