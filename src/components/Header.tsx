"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Brand } from "./Brand";
import s from "./Site.module.css";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.headerInner}`}>
        <Brand />
        <button
          ref={toggle}
          className={s.menuToggle}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={`${s.nav} ${open ? s.navOpen : ""}`}
          onBlur={(e) => {
            if (
              !e.currentTarget.contains(e.relatedTarget) &&
              e.relatedTarget !== toggle.current
            )
              setOpen(false);
          }}
        >
          {navigation.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a
            className={s.headerCta}
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
