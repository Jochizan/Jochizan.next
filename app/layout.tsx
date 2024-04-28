import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/app.css";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@components/theme-provider";
// import logo from "@assets/logos/logo.svg";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "FerreMKY",
//   description: "Sistema semi ERP para control de gestion de tiendas",
//   icons: [
//     {
//       rel: "icon",
//       // url: logo.src,
//     },
//   ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
