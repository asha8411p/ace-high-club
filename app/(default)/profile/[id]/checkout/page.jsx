"use client"
import React, { useState } from 'react';
import PaymentReceipt from './PaymentReceipt';

const CheckoutPage = () => {
    // State for storing form field values
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    // Dummy data for clubs and tournaments (you can replace with actual data)
    const clubs = ['Club A', 'Club B', 'Club C'];
    const tournaments = ['Tournament X', 'Tournament Y'];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate payment process
        console.log('Payment details:');
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVC:', cvc);
        // Reset form fields
        setCardNumber('');
        setExpiryDate('');
        setCvc('');
        // Display success message or navigate to a confirmation page
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <PaymentReceipt clubs={clubs} tournaments={tournaments} />
            <form onSubmit={handleSubmit}>
                {/* Form fields for card details */}
            </form>
        </div>
    );
};

export default CheckoutPage;
