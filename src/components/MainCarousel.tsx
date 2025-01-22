import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Banner {
  title: string;
  description: string;
  image: string;
}

interface MainCarouselProps {
  banners: Banner[];
}

export const MainCarousel = ({ banners }: MainCarouselProps) => {
  return (
    <div className="mb-12">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <div
                  className="h-[400px] w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url(${banner.image})`,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6 text-center text-white backdrop-blur-sm">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-2 text-2xl font-bold"
                  >
                    {banner.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg opacity-90"
                  >
                    {banner.description}
                  </motion.p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};