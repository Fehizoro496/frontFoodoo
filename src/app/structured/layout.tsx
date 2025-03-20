import type { Metadata } from "next";
import "../globals.css";
import Drawer from "./components/drawer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Foodoo",
  description: "A Recipe sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-9 lg:grid-cols-10 xl:grid-cols-11 h-screen w-screen gap-3 p-3 bg-amber-100">
        <Drawer/>
        <div className="col-span-7 lg:col-span-8 xl:col-span-9 flex flex-col overflow-y-hidden">
            <Navbar/>
            <ul className="foodCardContainer pt-3 grid grid-cols-3 xl:grid-cols-4 px-5 gap-5 overflow-y-scroll">
              {children}
            </ul>
        </div>
      </div>
  );
}
