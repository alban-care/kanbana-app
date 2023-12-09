import { PropsWithChildren } from "react";

import ThemeProvider from "@/components/ThemeProvider";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="kanbana-ui-theme">
      <div className="container flex flex-col h-full">
        {/* header */}
        <main className="bg-inherit">{children}</main>
        {/* footer */}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
