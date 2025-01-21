import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface DishCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  ingredients: string[];
  image: string;
}

export const DishCard = ({
  id,
  name,
  description,
  price,
  weight,
  ingredients,
  image,
}: DishCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price });
    toast.success("Блюдо добавлено");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-lg font-medium text-gold">{price} ₽</span>
        </div>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-2">
          <span className="text-sm text-gray-500">{weight} г</span>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Состав: </span>
            {ingredients.join(", ")}
          </p>
        </div>
        <Button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-gold hover:bg-gold-dark"
        >
          <Plus className="mr-2 h-4 w-4" /> Добавить
        </Button>
      </div>
    </motion.div>
  );
};