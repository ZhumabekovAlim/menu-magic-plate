import { CategoryCard } from "@/components/CategoryCard";
import { Cart } from "@/components/Cart";
import { motion } from "framer-motion";

const categories = [
  {
    id: "hot-dishes",
    name: "Горячие блюда",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: "salads",
    name: "Салаты",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    id: "soups",
    name: "Супы",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
  },
  {
    id: "desserts",
    name: "Десерты",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white py-8 shadow-sm">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-3xl font-semibold"
          >
            Наше меню
          </motion.h1>
        </div>
      </header>

      <main className="container mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </main>

      <Cart />
    </div>
  );
};

export default Index;