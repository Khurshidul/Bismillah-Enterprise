import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/Shopping/ShoppingCart";
type shoppingCartProviderProps = {
  children: ReactNode;
};
type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeItems: (id: string) => void;
  cartQuantity: number;
  items: CartItem[];
};
type CartItem = {
  id: string;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
export const ShoppingCartProvider = ({
  children,
}: shoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const cartQuantity = items.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: string) => {
    return items?.find((itme) => itme.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: string) => {
    setItems((currItems) => {
      if (currItems?.find((item) => item.id === id) == null) {
        return [...currItems, { id: id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: string) => {
    setItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItems = (id: string) => {
    setItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItems,
        openCart,
        closeCart,
        items,
        cartQuantity,
      }}>
      {children}
      <>
        {items.map((cartItems) => (
          <ShoppingCart isOpen={isOpen} cartItems={cartItems} />
        ))}
      </>
    </ShoppingCartContext.Provider>
  );
};
