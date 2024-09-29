import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "pslib-status",
    description: "Tipnete si, jaký uptime mají Bakaláři?",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cs">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
