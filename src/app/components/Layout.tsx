import * as React from "react";

interface LayoutProps {
  children: NonNullable<React.ReactNode>;
}
export function Layout(props: LayoutProps) {
  return (
    <main className="w-screen h-screen grid place-items-center font-[family-name:var(--font-geist-sans)] bg-gradient-to-tr from-0% from-grad-end to-100% to-grad-start">
      {props.children}
    </main>
  );
}
