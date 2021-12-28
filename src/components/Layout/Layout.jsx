import React from "react";

export default function Layout({ sidebar, children }) {
  return (
    <div className="flex">
      <aside className="w-44 min-h-screen">{sidebar}</aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
