"use client"
import React, { useContext } from 'react';
import Particles from "../../../../components/particles";
import { CartContext } from "../../../contexts/CartContext";
import { IntegrationCard } from "../../integrations/integrations-list";

export default function ProfilePage() {
    const { cart, removeFromCart } = useContext(CartContext);

    // Separate cart items into Clubs and Tournaments
    const clubs = cart.filter(item => item.category === 'Clubs');
    const tournaments = cart.filter(item => item.category === 'Tournaments');

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
                        <h3 className="text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">John Smith</h3>
                    </div>

                    {/* Clubs Section */}
                    <div className="mt-12 md:mt-16">
                        <h3 className="text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Clubs</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {clubs.map((item, index) => (
                                <IntegrationCard
                                    key={index}
                                    item={item}
                                    index={index}
                                    toggleCartItem={() => removeFromCart(item.id)}
                                    isInCart={true}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Tournaments Section */}
                    <div className="mt-12 md:mt-16">
                        <h3 className="text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Tournaments</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {tournaments.map((item, index) => (
                                <IntegrationCard
                                    key={index}
                                    item={item}
                                    index={index}
                                    toggleCartItem={() => removeFromCart(item.id)}
                                    isInCart={true}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
