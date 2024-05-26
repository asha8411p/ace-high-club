"use client"
import { useEffect, useState } from "react";
import { CartContext, useCart } from "@/app/contexts/CartContext";
import { Item, useItems } from "@/app/contexts/ItemsContext";
import IntegrationCard from "@/components/ui/IntegrationCard";

export type CartItem = Item & { isPurchased: boolean };

export default function IntegrationsList() {
  const {cart, addToCart, removeFromCart} = useCart();
  const {items, searchItems} = useItems();
  const [searchText, setSearchText] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    const filtered = searchItems(text);
    setFilteredItems(filtered);
  };

  const toggleCartItem = (item: Item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      removeFromCart(existingItem.id);
    } else {
      addToCart({ ...item, isPurchased: false } as CartItem);
    }
  };


  return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div
                className="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar">
              <ul className="flex flex-nowrap text-sm font-medium space-x-8">
                <li>
                  <a className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                     href="#Clubs">
                    <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path
                          d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z"/>
                    </svg>
                    <span>Clubs</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                     href="#tournaments">
                    <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path
                          d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31a1.001 1.001 0 0 1-1.403-.175Z"/>
                    </svg>
                    <span>Tournaments</span>
                  </a>
                </li>
              </ul>
              <div>
                <form className="relative flex items-center">
                  <input
                      className="form-input pl-10 bg-transparent  rounded-none focus:border-transparent focus:border-b-slate-700 lg:w-9 lg:focus:w-[200px] transition-[width]"
                      type="text"
                      id="search"
                      aria-label="Search…"
                      placeholder="Search…"
                      autoComplete="off"
                      value={searchText}
                      onChange={handleSearch}
                  />
                  <div className="absolute inset-0 w-9 flex items-center justify-center pointer-events-none">
                    <svg className="absolute fill-slate-50 mx-3" xmlns="http://www.w3.org/2000/svg" width="16"
                         height="16">
                      <path
                          d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z"/>
                    </svg>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="mt-12 md:mt-16">
                <h3 id="Clubs"
                    className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Clubs</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.filter(item => item.category === 'Clubs').length ? (
                      filteredItems
                          .filter(item => item.category === 'Clubs')
                          .map((item, index) => (
                              <IntegrationCard
                                  key={index}
                                  item={item}
                                  toggleCartItem={toggleCartItem}
                                  isInCart={cart.some(cartItem => cartItem.name === item.name)}
                                  isPurchased={cart.find(cartItem => cartItem.id === item.id)?.isPurchased || false}
                              />
                          ))
                  ) : (
                      <p>No Clubs Found</p>
                  )}
                </div>
              </div>
              <div className="mt-12 md:mt-16">
                <h3 id="tournaments"
                    className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Tournaments</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.filter(item => item.category === 'Tournaments').length ? (
                      filteredItems
                          .filter(item => item.category === 'Tournaments')
                          .map((item, index) => (
                              <IntegrationCard
                                  key={index}
                                  item={item}
                                  toggleCartItem={toggleCartItem}
                                  isInCart={cart.some(cartItem => cartItem.name === item.name)}
                                  isPurchased={cart.find(cartItem => cartItem.id === item.id)?.isPurchased || false}
                                  // Pass the isPurchased status from the cart
                              />
                          ))
                  ) : (
                      <p>No Tournaments Found</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}