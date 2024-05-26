import React from 'react';

interface Player {
    name: string;
    playingTime: string;
    winnings: number;
    averageWinRate: number;
    preferredGame: string;
}

interface LeaderboardProps {
    players: Player[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ players }) => {
    return (
        <div className="w-full">
            <h2 className="h4 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Leaderboard</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-inherit">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Playing Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Winnings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Win Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferred Game</th>
                    </tr>
                    </thead>
                    <tbody className="bg-inherit divide-y divide-gray-200">
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{player.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{player.playingTime}</td>
                            <td className="px-6 py-4 whitespace-nowrap">${player.winnings}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{player.averageWinRate}%</td>
                            <td className="px-6 py-4 whitespace-nowrap">{player.preferredGame}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
