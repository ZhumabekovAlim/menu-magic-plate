import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  menuItems: Record<string, { title: string }>;
  scrollToCategory: (categoryId: string) => void;
}

export const Header = ({ menuItems, scrollToCategory }: HeaderProps) => {
  return (
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
  );
};