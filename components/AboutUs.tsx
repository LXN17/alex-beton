export default function AboutUs() {
  const advantages = [
    {
      img: "/privelege_item1.png",
      title: "Широкий ассортимент",
      text: "Поставляем песок, щебень, бетон, землю, торф и другие материалы. Всё — в одном месте, без посредников.",
    },
    {
      img: "/privelege_item2.png",
      title: "Собственный автопарк",
      text: "Наши самосвалы, тонары, краны и миксеры всегда в исправном состоянии и готовы к выезду на объект.",
    },
    {
      img: "/privelege_item3.png",
      title: "Лояльные цены",
      text: "Цены подбираются индивидуально — в зависимости от объёма и направления доставки. Постоянным клиентам — скидки.",
    },
    {
      img: "/privelege_item4.png",
      title: "Быстрая доставка",
      text: "Оперативно доставим стройматериалы по Москве и области прямо на площадку в удобное для вас время.",
    },
  ];

  return (
    <section
      id="aboutus"
      className="scroll-mt-24 bg-black text-white py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Почему выбирают нас?
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
        >
          {advantages.map((item, index) => (
            <article
              key={index}
              className="bg-neutral-800 p-6 rounded shadow hover:shadow-lg transition flex flex-col justify-between h-full"
              role="listitem"
            >
              <header className="text-center mb-4">
                <img
                  src={item.img}
                  alt={item.title || "Преимущество"}
                  className="w-16 h-16 object-contain mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </header>
              <p className="text-sm text-center">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
