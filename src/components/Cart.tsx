import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export const Cart = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-gold p-4 shadow-lg hover:bg-gold-dark"
      >
        <ShoppingBag className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white">
            {items.length}
          </span>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-md bg-white p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Выбранные блюда</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {items.length === 0 ? (
                <p className="mt-8 text-center text-gray-500">
                  Корзина пуста
                </p>
              ) : (
                <>
                  <div className="mt-6 space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.price} ₽</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">Итого:</span>
                      <span className="text-lg font-semibold">{total} ₽</span>
                    </div>
                    <Button
                      onClick={() => {
                        clearCart();
                        setIsOpen(false);
                      }}
                      className="mt-4 w-full bg-gold hover:bg-gold-dark"
                    >
                      Показать официанту
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};