import { DishCard } from "@/components/DishCard";
import { Cart } from "@/components/Cart";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const menuItems = {
  "hot-dishes": {
    title: "Горячие блюда",
    items: [
      {
        id: "1",
        name: "Стейк Рибай",
        description: "Сочный стейк из мраморной говядины",
        price: 2500,
        weight: 300,
        ingredients: ["Говядина", "Розмарин", "Чеснок", "Масло"],
        image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef",
      },
    ],
  },
  salads: {
    title: "Салаты",
    items: [
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
    ],
  },
  soups: {
    title: "Супы",
    items: [
      {
        id: "3",
        name: "Борщ",
        description: "Традиционный борщ со сметаной",
        price: 450,
        weight: 300,
        ingredients: ["Свекла", "Капуста", "Морковь", "Говядина"],
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
      },
    ],
  },
  desserts: {
    title: "Десерты",
    items: [
      {
        id: "4",
        name: "Тирамису",
        description: "Классический итальянский десерт",
        price: 400,
        weight: 150,
        ingredients: ["Маскарпоне", "Печенье савоярди", "Кофе", "Какао"],
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      },
    ],
  },
};

const Index = () => {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="fixed top-0 z-10 w-full bg-white py-4 shadow-sm">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-center text-3xl font-semibold"
          >
            Наше меню
          </motion.h1>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4 px-4">
              {Object.entries(menuItems).map(([id, category]) => (
                <Button
                  key={id}
                  variant="ghost"
                  className="flex-shrink-0"
                  onClick={() => scrollToCategory(id)}
                >
                  {category.title}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </header>

      <main className="container mt-36">
        {Object.entries(menuItems).map(([id, category]) => (
          <section key={id} id={id} className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">{category.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((dish) => (
                <DishCard key={dish.id} {...dish} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Cart />
    </div>
  );
};

export default Index;