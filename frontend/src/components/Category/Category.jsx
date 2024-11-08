import { useEffect, useState } from "react";
import { message } from "antd";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Kategoriler yüklenemedi.");
        }
      } catch (error) {
        console.log("Kategori Hatası:", error);
        message.error("Kategoriler yüklenemedi.");
      }
    };

    fetchCategories();
  }, [apiUrl]);

  return (
    <div className="w-1/4 p-4">
      <aside>
        <section className="mb-8" style={{ height: "100px" }}>
          <form className="relative border p-2">
            <input
              type="search"
              className="w-full p-2 border"
              placeholder="Search product..."
            />
            <button className="absolute right-2 top-2">
              <i className="icon-search"></i>
            </button>
          </form>
        </section>

        <section className="mb-8" style={{ height: "300px" }}>
          <h3 className="text-lg font-bold mb-4">PRODUCT CATEGORIES</h3>
          <ul>
            {categories.map((category) => (
              <li key={category._id} className="mb-4 flex items-center p-4 bg-white shadow-lg rounded-lg">
                <img src={category.image} alt={category.name} className="w-16 h-16 mr-4 border-4 object-cover" />
                <span className="text-xl font-semibold">{category.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8" style={{ height: "400px" }}>
          <h3 className="text-lg font-bold mb-4">Top rate</h3>
          <ul>
            <li className="flex mb-4">
              <div className="w-1/4">
                <a href="shop-detail.html">
                  <img
                    src="http://placehold.it/70x80"
                    alt="image description"
                    className="w-full"
                  />
                </a>
              </div>
              <div className="w-3/4 pl-2">
                <h4 className="text-sm mb-1">
                  <a href="shop-detail.html">Vitamin C face wash</a>
                </h4>
                <strong className="text-lg">$21.00</strong>
              </div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default Category;