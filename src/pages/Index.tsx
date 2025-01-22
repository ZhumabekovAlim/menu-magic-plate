import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { MainCarousel } from "@/components/MainCarousel";
import { DishCard } from "@/components/DishCard";

const mainBanners = [
  {
    title: "Специальное предложение",
    description: "Скидка 30% на все меню в честь открытия",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  },
  {
    title: "Бизнес-ланч",
    description: "Каждый будний день с 12:00 до 16:00",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    title: "Доставка",
    description: "Бесплатная доставка при заказе от 2000₽",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  }
];

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
  "bar-menu": {
    title: "Барное меню",
    items: [
      {
        id: "5-1",
        name: "Московский Мул",
        description: "Классический коктейль с водкой, имбирным пивом и лаймом",
        price: 550,
        weight: 300,
        ingredients: ["Водка", "Имбирное пиво", "Лайм", "Мята"],
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
      },
      {
        id: "5-2",
        name: "Негрони",
        description: "Элегантный коктейль с джином, вермутом и кампари",
        price: 620,
        weight: 150,
        ingredients: ["Джин", "Красный вермут", "Кампари", "Апельсин"],
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
      },
      {
        id: "5-3",
        name: "Маргарита",
        description: "Освежающий коктейль с текилой и лаймом",
        price: 580,
        weight: 180,
        ingredients: ["Текила", "Куантро", "Лайм", "Соль"],
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
      },
    ],
  },
  appetizers: {
    title: "Закуски",
    items: [
      {
        id: "6-1",
        name: "Брускетта с томатами",
        description: "Хрустящий багет с томатами и базиликом",
        price: 420,
        weight: 180,
        ingredients: ["Багет", "Томаты", "Базилик", "Чеснок", "Оливковое масло"],
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      },
      {
        id: "6-2",
        name: "Карпаччо из говядины",
        description: "Тонко нарезанная говядина с рукколой и пармезаном",
        price: 780,
        weight: 150,
        ingredients: ["Говядина", "Руккола", "Пармезан", "Каперсы"],
        image: "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29",
      },
      {
        id: "6-3",
        name: "Тартар из тунца",
        description: "Свежий тунец с авокадо и соусом понзу",
        price: 850,
        weight: 160,
        ingredients: ["Тунец", "Авокадо", "Соус понзу", "Кунжут"],
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
    ],
  },
  pasta: {
    title: "Паста",
    items: [
      {
        id: "7-1",
        name: "Карбонара",
        description: "Классическая паста с гуанчале и яйцом",
        price: 720,
        weight: 350,
        ingredients: ["Спагетти", "Гуанчале", "Пармезан", "Яйцо"],
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
      },
      {
        id: "7-2",
        name: "Паста с морепродуктами",
        description: "Лингвини с креветками и мидиями в томатном соусе",
        price: 890,
        weight: 380,
        ingredients: ["Лингвини", "Креветки", "Мидии", "Томатный соус"],
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
      },
      {
        id: "7-3",
        name: "Равиоли с рикоттой",
        description: "Домашние равиоли с рикоттой и шпинатом",
        price: 680,
        weight: 320,
        ingredients: ["Равиоли", "Рикотта", "Шпинат", "Сливочный соус"],
        image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa",
      },
    ],
  },
};

const promotionalBanners = {
  "hot-dishes": {
    title: "Горячие блюда дня",
    description: "Скидка 20% на все горячие блюда по будням с 15:00 до 18:00",
    gradient: "linear-gradient(to right, #ee9ca7, #ffdde1)",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  },
  salads: {
    title: "Здоровое питание",
    description: "Попробуйте наши новые салаты с авокадо",
    gradient: "linear-gradient(184.1deg, rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2%)",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
  },
  soups: {
    title: "Согревающее предложение",
    description: "К любому супу хлебная корзина в подарок",
    gradient: "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
  },
  desserts: {
    title: "Сладкие моменты",
    description: "Десерт дня со скидкой 15%",
    gradient: "linear-gradient(90deg, rgb(245,152,168) 0%, rgb(246,237,178) 100%)",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  "bar-menu": {
    title: "Счастливые часы",
    description: "Коктейли 2 по цене 1 с 18:00 до 20:00",
    gradient: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
  },
  appetizers: {
    title: "Закуски к вину",
    description: "При заказе бутылки вина закуски со скидкой 30%",
    gradient: "linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
  },
  pasta: {
    title: "Паста дня",
    description: "Спагетти карбонара всего за 590₽ по понедельникам",
    gradient: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
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
      <Header menuItems={menuItems} scrollToCategory={scrollToCategory} />

      <main className="container mt-36">
        <MainCarousel banners={mainBanners} />

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
