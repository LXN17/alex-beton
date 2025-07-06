"use client";

import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="services" className="text-black p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Наши материалы</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(products).map(([category, items]) => (
            <article key={category} className="bg-white rounded shadow p-4">
              <header>
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full border text-left text-sm mb-4">
                  <caption className="sr-only">{category}</caption>
                  <thead className="bg-gray-200">
                    <tr>
                      <th scope="col" className="p-2 border">
                        Наименование
                      </th>
                      <th scope="col" className="p-2 border">
                        Цена от (за м³)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.name} className="border-b">
                        <td className="p-2 border">{item.name}</td>
                        <td className="p-2 border">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a
                  href="tel:+7250201526"
                  className="block w-full text-center bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
                >
                  Позвонить
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
