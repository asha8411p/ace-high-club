'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { CartProvider } from '@/app/contexts/CartContext';
import { ItemsProvider } from '@/app/contexts/ItemsContext';
import ChatbotWidget from "@/components/ui/ChatbotWidget";
import {AuthProvider} from "@/app/contexts/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 1000,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        // <AuthProvider>
        // <ItemsProvider>
        //        <CartProvider>
        <>
                    <Header />
                    <main className="grow">
                        {children}
                        <ChatbotWidget />
                    </main>
                    <Footer />
        </>
               // </CartProvider>
            // {/*</ItemsProvider>*/}
        // </AuthProvider>
    );
}
