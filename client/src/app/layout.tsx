import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navber from "./components/Navber";
import { AuthProvider } from "./context/auth";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "udemy",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <AuthProvider>
                <body className={inter.className}>
                <Providers>
                    <Navber />
                    {children}
                </Providers>
                </body>
            </AuthProvider>
        </html>
    );
}
