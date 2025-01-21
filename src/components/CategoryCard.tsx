import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
}

export const CategoryCard = ({ id, name, image }: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
          {name}
        </h3>
      </motion.div>
    </Link>
  );
};