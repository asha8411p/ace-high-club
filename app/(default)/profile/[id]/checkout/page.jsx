"use client"
import React, {useContext, useState} from 'react';
import PaymentReceipt from './PaymentReceipt';
import Particles from "../../../../../components/particles";
import { CartContext } from "../../../../contexts/CartContext";
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const { cart, updatePurchaseStatus } = useContext(CartContext);
    const clubs = cart.filter(item => item.category === 'Clubs');
    const tournaments = cart.filter(item => item.category === 'Tournaments');
    const router = useRouter();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setCardNumber('');
        setExpiryDate('');
        setCvc('');
        alert("Payment success");
        updatePurchaseStatus(cart);
        router.push('/profile/1');
    };

    return (
        <section className="relative">
            {/* Radial gradient */}
            <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
                <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
                <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
            </div>

            {/* Particles animation */}
            {typeof window !== 'undefined' && <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />}

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-16">
                    <div className="mt-12 md:mt-16">
                        <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Checkout</h1>
                    </div>
                    {/* Clubs Section */}
                    <div className="mx-auto mt-12 md:mt-16">
                        <div className="max-w-4xl w-full flex flex-row-reverse justify-between">
                            <PaymentReceipt clubs={clubs} tournaments={tournaments} className="w-1/2"/>
                            <form onSubmit={handleSubmit} className="w-1/2">
                                <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                                <div className="mb-4">
                                    <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        className="form-input mt-1 block w-full"
                                        placeholder="Enter card number"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        className="form-input mt-1 block w-full"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cvc" className="block text-gray-700">CVC</label>
                                    <input
                                        type="text"
                                        id="cvc"
                                        value={cvc}
                                        onChange={(e) => setCvc(e.target.value)}
                                        className="form-input mt-1 block w-full"
                                        placeholder="Enter CVC"
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Confirm Payment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;