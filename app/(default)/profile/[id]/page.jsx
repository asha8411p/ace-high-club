"use client"
import React, { useContext } from 'react';
import Particles from "../../../../components/particles";
import { CartContext } from "../../../contexts/CartContext";
import IntegrationCard from "../../../../components/ui/IntegrationCard";
import Link from "next/link";
import { useAuth } from "../../../contexts/AuthContext";

export default function ProfilePage() {
    const { user } = useAuth();
    const { cart } = useContext(CartContext);

    // Filter items into cart and purchased items
    const cartItems = cart.filter(item => !item.isPurchased);
    const purchasedItems = cart.filter(item => item.isPurchased);

    return (
        <section className="relative">
            {/* Radial gradient */}
            <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
                <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
                <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
            </div>

            {/* Particles animation */}
            <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-16">
                    <div className="mt-12 md:mt-16">
                        <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{user?.name}</h1>
                    </div>

                    {/* Cart Items Section */}
                    {cartItems.length > 0 && (
                        <div className="mt-12 md:mt-16">
                            <h3 className="text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Cart Items</h3>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {cartItems.map((item, index) => (
                                    <IntegrationCard
                                        key={index}
                                        item={item}
                                        toggleCartItem={() => removeFromCart(item.id)}
                                        isInCart={true}
                                        isPurchased={false}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Purchased Items Section */}
                    {purchasedItems.length > 0 && (
                        <div className="mt-12 md:mt-16">
                            <h3 className="text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Purchased Items</h3>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {purchasedItems.map((item, index) => (
                                    <IntegrationCard
                                        key={index}
                                        item={item}
                                        toggleCartItem={() => {}} // No action needed for purchased items
                                        isInCart={false}
                                        isPurchased={true}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Proceed to Checkout Button */}
                    {cart.length > 0 && (
                        <div className="mt-12 md:mt-16">
                            <Link href="1/checkout" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block">
                                Proceed to Checkout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
