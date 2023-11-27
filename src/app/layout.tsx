import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import styles from "@/app/styles/Home.module.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={styles.main}>
          <Header />
          <div className="mt-56 w-full h-full">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
