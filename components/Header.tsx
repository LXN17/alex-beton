"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      role="banner"
      className="text-black w-full p-4 bg-white shadow sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold" aria-label="Название компании">
          Алекс Бетон
        </h1>

        <nav
          role="navigation"
          aria-label="Основная навигация"
          className="hidden md:flex gap-6 items-center"
        >
          <Link href="#services" className="hover:underline">
            Товары
          </Link>
          <Link href="#contacts" className="hover:underline">
            Контакты
          </Link>
          <a
            href="tel:+79250201526"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            aria-label="Позвонить по номеру +7 925 020-15-26"
          >
            Позвонить
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav
          role="navigation"
          aria-label="Мобильная навигация"
          className="md:hidden mt-4 flex flex-col gap-4 items-start px-2"
        >
          <Link
            href="#services"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Товары
          </Link>
          <Link
            href="#contacts"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Контакты
          </Link>
          <a
            href="tel:+79250201526"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            aria-label="Позвонить по номеру +7 925 020-15-26"
          >
            Позвонить
          </a>
        </nav>
      )}
    </header>
  );
}
