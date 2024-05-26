// contexts/DataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Item } from 'app/(default)/integrations/integrations-list';

interface DataContextType {
    data: Item[];
    addToData: (item: Item) => void;
    removeFromData: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<Item[]>([]);

    const addToData = (item: Item) => {
        setData((prevData) => [...prevData, item]);
    };

    const removeFromData = (id: string) => {
        setData((prevData) => prevData.filter(item => item.id !== id));
    };

    return (
        <DataContext.Provider value={{ data, addToData, removeFromData }}>
            {children}
        </DataContext.Provider>
    );
};
