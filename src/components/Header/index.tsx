import React from "react";
import "./header.css";

interface HeaderProps {
  right?: React.ReactNode;
}
export default function Header(props: HeaderProps) {
  const { right } = props;
  return (
    <header>
      <h1>Charming Chad</h1>
      {right}
    </header>
  );
}

export function PublicNavActions() {
  return (
    <div>
      <button>Login</button>
      <button>Sing up</button>
    </div>
  );
}
