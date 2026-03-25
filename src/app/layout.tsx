import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "../components/layout/Sidebar";
import { cn } from "../lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata = {
  title: "ERP Modular System",
  description: "Internal Base Template for ERP and CRM prototyping and development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden")}>
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8 relative">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
