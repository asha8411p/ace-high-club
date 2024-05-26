"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';
import IntegrationsImg04 from '@/public/images/integrations-04.svg';
import IntegrationsImg06 from '@/public/images/integrations-06.svg';
import IntegrationsImg07 from '@/public/images/integrations-07.svg';
import IntegrationsImg19 from '@/public/images/integrations-19.svg';
import IntegrationsImg20 from '@/public/images/integrations-20.svg';

export type Item = {
    id: number;
    img: string;
    name: string;
    description: string;
    featured: boolean;
    category: 'Clubs' | 'Tournaments';
};

const initialItems: Item[] = [
    {
        id: 1,
        img: IntegrationsImg06,
        name: 'Club Marconi',
        description: 'Sydney\'s Top Dealer Dealt Poker Room. Visit The Poker Palace at Club Marconi the best place to play fully dealer dealt poker in Sydney! The Sunday Super Stack has single re-entry and is a playoff for the greatest minds.',
        featured: true,
        category: 'Clubs'
    },
    {
        id: 2,
        img: IntegrationsImg07,
        name: 'Star Poker',
        description: 'The Star offers a variety of table games for your enjoyment 24/7. Whether you want to step up to a Baccarrat table or pull up a seat in our Poker room, we\'ve got all your bases covered. Not sure how to play? No problem! Learn how to play all of our games with The Star Sydney\'s guides to table games.',
        featured: false,
        category: 'Clubs'
    },
    {
        id: 3,
        img: IntegrationsImg04,
        name: 'Poker Palace',
        description: 'Club Marconi’s Poker Palace is truly the best Poker Room in Australia, if not the World! We have over 30 tables, over 10 expert card dealers, beverage tray service and welcoming staff and management.',
        featured: true,
        category: 'Clubs'
    },
    {
        id: 4,
        img: IntegrationsImg19,
        name: 'Event: Star Poker',
        description: 'Monday - Sunday (10am - 4am)',
        featured: true,
        category: 'Tournaments'
    },
    {
        id: 5,
        img: IntegrationsImg20,
        name: 'Richmond Club - Super Series Classic',
        description: '$20,000 GTD',
        featured: true,
        category: 'Tournaments'
    },
];

type ItemsContextType = {
    items: Item[];
    searchItems: (searchText: string) => Item[];
    addItem: (item: Item) => void;
    deleteItem: (id: number) => void;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<Item[]>(initialItems); // Initialize items with initialItems
    const [searchText, setSearchText] = useState<string>('');

    const searchItems = (text: string) => {
        setSearchText(text);
        return items.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    };

    const addItem = (item: Item) => {
        setItems(prevItems => [...prevItems, item]);
    };

    const deleteItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <ItemsContext.Provider value={{ items, searchItems, addItem, deleteItem }}>
            {children}
        </ItemsContext.Provider>
    );
};

export const useItems = () => {
    const context = useContext(ItemsContext);
    if (!context) {
        throw new Error('useItems must be used within an ItemsProvider');
    }
    return context;
};


// const items = [
//   {
//     img: IntegrationsImg06,
//     name: 'Vercel',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg07,
//     name: 'Sentry',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: false,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg04,
//     name: 'Jira',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg08,
//     name: 'GitHub',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg05,
//     name: 'GitLab',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg01,
//     name: 'Retool',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg02,
//     name: 'Zapier',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg03,
//     name: 'Airtable',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg09,
//     name: 'Framer',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg10,
//     name: 'Jotform',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: false,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg11,
//     name: 'Webflow',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg12,
//     name: 'Coda',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: false,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg13,
//     name: 'Asana',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg14,
//     name: 'Myngo',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg15,
//     name: 'Bonsai',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg16,
//     name: 'Decipad',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg17,
//     name: 'Miro',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg18,
//     name: 'Popform',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Clubs'
//   },
//   {
//     img: IntegrationsImg19,
//     name: 'Linear',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg20,
//     name: 'Microsoft',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg21,
//     name: 'Google Drive',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg22,
//     name: 'InVision',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg23,
//     name: 'WeTransfer',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: false,
//     category: 'Tournaments'
//   },
//   {
//     img: IntegrationsImg24,
//     name: 'Hotjar',
//     description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
//     link: '/integrations/single-post',
//     featured: true,
//     category: 'Tournaments'
//   }
// ];
