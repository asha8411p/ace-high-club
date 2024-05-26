"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Item } from "@/app/contexts/ItemsContext";
import { useAuth } from "@/app/contexts/AuthContext";

type CartItemType = Item & { isPurchased: boolean };

type CartContextType = {
    userId: string | null;
    cart: CartItemType[];
    addToCart: (item: CartItemType) => void;
    removeFromCart: (itemId: number) => void;
    updatePurchaseStatus: (items: CartItemType[]) => void;
    loadCart: () => void;
    saveCart: () => void;
};

type CartProviderProps = {
    children: ReactNode;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItemType[]>([]);
    const { userId } = useAuth();
    // Ensure userId is always a string, defaulting to an empty string if null
    const userIdString = userId || '';

    const addToCart = (item: CartItemType) => {
        if (!item.isPurchased) {
            setCart(prevCart => [...prevCart, { ...item, isPurchased: false }]);
        }
    };

    const removeFromCart = (itemId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const updatePurchaseStatus = (items: CartItemType[]) => {
        setCart(items.map(item => ({ ...item, isPurchased: true })));
    };

    const loadCart = () => {
        if (userId) {
            const savedCart = localStorage.getItem(`cart_${userId}`);
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        }
    };

    const saveCart = () => {
        if (userId) {
            localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
        }
    };

    useEffect(() => {
        if (userId) {
            loadCart();
        }
    }, [userId]);

    useEffect(() => {
        if (userId) {
            saveCart();
        }
    }, [cart, userId]);

    return (
        <CartContext.Provider value={{ userId, cart, addToCart, removeFromCart, updatePurchaseStatus, loadCart, saveCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};


// "use client"
// import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
// import { Item } from "@/app/contexts/ItemsContext";
//
// type CartItemType = Item & { isPurchased: boolean };
//
// type CartContextType = {
//     cart: CartItemType[];
//     addToCart: (item: CartItemType) => void;
//     removeFromCart: (itemId: number) => void;
// };
//
// type CartProviderProps = {
//     children: ReactNode;
// };
// export const CartContext = createContext<CartContextType | undefined>(undefined);
//
// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//     const [cart, setCart] = useState<CartItemType[]>([]);
//
//     const addToCart = (item: CartItemType) => {
//         // Check if the item is already purchased
//         if (!item.isPurchased) {
//             setCart([...cart, { ...item, isPurchased: false }]);
//         }
//     };
//
//     const removeFromCart = (itemId: number) => {
//         const updatedCart = cart.filter((item) => item.id !== itemId);
//         setCart(updatedCart);
//     };
//
//     const updatePurchaseStatus = (items: CartItemType[]) => {
//         setCart(items.map(item => ({ ...item, isPurchased: true })));
//     };
//
//     useEffect(() => {
//         // Add purchased items when cart items are updated
//         const newPurchasedItems = cart.filter(item => item.isPurchased);
//         console.log(newPurchasedItems);
//     }, [cart]);
//
//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, updatePurchaseStatus}}>
//             {children}
//         </CartContext.Provider>
//     );
// };
//
// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };
