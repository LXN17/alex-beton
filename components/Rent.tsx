"use client";

import { rent } from "@/data/rent";

export default function Rent() {
  return (
    <section id="rent" className="text-black p-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Аренда техники</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(rent).map(([category, items]) => (
            <article key={category} className="bg-gray-50 rounded shadow p-4">
              <header>
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full border text-left text-sm mb-4">
                  <caption className="sr-only">{category}</caption>
                  <thead className="bg-gray-200">
                    <tr>
                      <th scope="col" className="p-2 border">
                        Техника
                      </th>
                      <th scope="col" className="p-2 border">
                        Цена
                      </th>
                      <th scope="col" className="p-2 border">
                        Условия
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.name} className="border-b">
                        <td className="p-2 border">{item.name}</td>
                        <td className="p-2 border">{item.price}</td>
                        <td className="p-2 border">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a
                  href="tel:+79250201526"
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
