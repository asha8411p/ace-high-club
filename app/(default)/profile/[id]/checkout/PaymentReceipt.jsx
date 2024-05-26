import React from 'react';

const PaymentReceipt = ({ clubs, tournaments, className }) => {
    // Calculate total cost
    const clubCost = clubs.length * 10; // $10 per club
    const tournamentCost = tournaments.length * 5; // $5 per tournament
    const totalCost = clubCost + tournamentCost;

    return (
        <div className="bg-opacity-40 bg-gray-100 p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-4">Receipt</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Clubs</h3>
                <ul>
                    {clubs.map((club, index) => (
                        <li key={index} className="text-gray-300">{club.name} - $10</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Tournaments</h3>
                <ul>
                    {tournaments.map((tournament, index) => (
                        <li key={index} className="text-gray-300">{tournament.name} - $5</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Total Cost: ${totalCost}</h3>
            </div>
        </div>
    );
};

export default PaymentReceipt;
