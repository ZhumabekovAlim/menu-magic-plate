import { motion } from "framer-motion";

interface PromotionalBannerProps {
  title: string;
  description: string;
  gradient: string;
  image: string;
}

export const PromotionalBanner = ({
  title,
  description,
  gradient,
  image,
}: PromotionalBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 overflow-hidden rounded-lg shadow-lg"
      style={{
        background: gradient,
      }}
    >
      <div className="relative flex min-h-[200px] items-center justify-between p-6">
        <div className="z-10 max-w-[60%] text-white">
          <h3 className="mb-2 text-2xl font-bold">{title}</h3>
          <p className="text-lg opacity-90">{description}</p>
        </div>
        <div
          className="absolute right-0 top-0 h-full w-[40%] bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
    </motion.div>
  );
};