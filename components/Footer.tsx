export default function Footer() {
  return (
    <footer id="contacts" className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
        <section
          aria-labelledby="footer-brand"
          className="flex-1 min-w-[250px]"
        >
          <h2 id="footer-brand" className="text-lg font-semibold mb-2">
            Алекс Бетон
          </h2>
          <p className="text-sm text-gray-400">
            Поставки стройматериалов и аренда техники.
          </p>
        </section>

        <section
          aria-labelledby="footer-contacts"
          className="flex-1 min-w-[250px]"
        >
          <h2 id="footer-contacts" className="text-lg font-semibold mb-2">
            Контакты
          </h2>
          <address className="not-italic space-y-1 text-sm">
            <p>
              📞{" "}
              <a href="tel:+79250201526" className="hover:underline">
                +7 925 020-15-26
              </a>
            </p>
            <p>🕑 Ежедневно: 8:00 – 21:00</p>
            <p>📍 Деревня Духанино, Истринский р-он</p>
          </address>

          <div className="mt-4">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=36.956657%2C55.970854&z=16&pt=36.956657,55.970854~v:Алекс%20Бетон"
              width="100%"
              height="200"
              allowFullScreen
              title="Карта - Деревня Духанино"
              className="rounded"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <nav aria-labelledby="footer-nav" className="flex-1 min-w-[250px]">
          <h2 id="footer-nav" className="text-lg font-semibold mb-2">
            Навигация
          </h2>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#aboutus" className="hover:underline">
                О нас
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Материалы
              </a>
            </li>
            <li>
              <a href="tel:+79250201526" className="hover:underline">
                Связаться
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Алекс Бетон. Все права защищены.
      </div>
    </footer>
  );
}
