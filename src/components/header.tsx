import React, { useEffect, useRef, useState } from "react";
import "./scss/header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setMenuAberto(false);
      }
    }

    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  return (
    <header>
      <h1>PLANETAS</h1>

      <menu id="menu" ref={menuIconRef} onClick={() => setMenuAberto(!menuAberto)}>
        <img src="/img/menu.png" alt="" />
      </menu>

      <nav ref={menuRef} className={menuAberto ? "menu-aberto" : "menu-fechado"}>
        <Link to="/mercurio">Mercurio</Link>
        <Link to="/venus">Vênus</Link>
        <Link to="/terra">Terra</Link>
        <Link to="/marte">Marte</Link>
        <Link to="/jupiter">Júpiter</Link>
        <Link to="/saturno">Saturno</Link>
        <Link to="/urano">Urano</Link>
        <Link to="/netuno">Netuno</Link>
      </nav>
    </header>
  );
}

export default Header;
