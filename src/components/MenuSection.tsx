import { DishCard } from "@/components/DishCard";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  ingredients: string[];
  image: string;
}

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItem[];
}

export const MenuSection = ({ id, title, items }: MenuSectionProps) => {
  return (
    <section id={id} className="mb-12">
      <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((dish) => (
          <DishCard key={dish.id} {...dish} />
        ))}
      </div>
    </section>
  );
};