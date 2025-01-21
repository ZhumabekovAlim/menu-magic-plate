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
      {
        id: "1-2",
        name: "Утиная грудка",
        description: "Нежная утиная грудка с апельсиновым соусом",
        price: 1800,
        weight: 250,
        ingredients: ["Утиная грудка", "Апельсин", "Мед", "Тимьян"],
        image: "https://images.unsplash.com/photo-1572448862527-d3c904757de6",
      },
      {
        id: "1-3",
        name: "Лосось на гриле",
        description: "Филе лосося с овощами и лимонным соусом",
        price: 1600,
        weight: 280,
        ingredients: ["Лосось", "Цукини", "Морковь", "Лимон"],
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
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
      {
        id: "2-2",
        name: "Греческий салат",
        description: "Традиционный греческий салат с фетой",
        price: 550,
        weight: 300,
        ingredients: ["Помидоры", "Огурцы", "Фета", "Маслины", "Лук"],
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      },
      {
        id: "2-3",
        name: "Теплый салат с креветками",
        description: "Салат с тигровыми креветками и авокадо",
        price: 850,
        weight: 220,
        ingredients: ["Креветки", "Авокадо", "Руккола", "Черри", "Кунжут"],
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74",
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
      {
        id: "3-2",
        name: "Грибной крем-суп",
        description: "Нежный крем-суп из белых грибов",
        price: 520,
        weight: 250,
        ingredients: ["Белые грибы", "Сливки", "Лук", "Картофель"],
        image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      },
      {
        id: "3-3",
        name: "Том Ям",
        description: "Острый тайский суп с морепродуктами",
        price: 680,
        weight: 300,
        ingredients: ["Креветки", "Кокосовое молоко", "Грибы", "Лемонграсс"],
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
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
      {
        id: "4-2",
        name: "Чизкейк Нью-Йорк",
        description: "Классический американский чизкейк",
        price: 450,
        weight: 160,
        ingredients: ["Сливочный сыр", "Печенье", "Сливки", "Ягоды"],
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
      },
      {
        id: "4-3",
        name: "Шоколадный фондан",
        description: "Теплый шоколадный десерт с жидкой начинкой",
        price: 480,
        weight: 130,
        ingredients: ["Темный шоколад", "Масло", "Яйца", "Мука"],
        image: "https://images.unsplash.com/photo-1617305855786-0701425aa3a4",
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