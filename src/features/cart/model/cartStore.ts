import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];

  addItem: (product: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      increase: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        })),

      decrease: (id) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0),
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
