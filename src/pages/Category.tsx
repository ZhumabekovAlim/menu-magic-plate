import { useParams } from "react-router-dom";
import { DishCard } from "@/components/DishCard";
import { Cart } from "@/components/Cart";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const menuItems = {
  "hot-dishes": [
    {
      id: "1",
      name: "Стейк Рибай",
      description: "Сочный стейк из мраморной говядины",
      price: 2500,
      weight: 300,
      ingredients: ["Говядина", "Розмарин", "Чеснок", "Масло"],
      image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef",
    },
    // Add more dishes...
  ],
  salads: [
    {
      id: "2",
      name: "Цезарь с курицей",
      description: "Классический салат с куриным филе",
      price: 650,
      weight: 250,
      ingredients: [
        "Салат романо",
        "Курица",
        "Гренки",
        "Пармезан",
        "Соус цезарь",
      ],
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
    },
    // Add more dishes...
  ],
  // Add more categories...
};

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const dishes = menuItems[id as keyof typeof menuItems] || [];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white py-8 shadow-sm">
        <div className="container">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-4 text-2xl font-semibold"
            >
              {id === "hot-dishes"
                ? "Горячие блюда"
                : id === "salads"
                ? "Салаты"
                : id === "soups"
                ? "Супы"
                : "Десерты"}
            </motion.h1>
          </div>
        </div>
      </header>

      <main className="container mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>
      </main>

      <Cart />
    </div>
  );
};

export default Category;