"use client"
import React, { useState } from 'react';
import { useItems } from '@/app/contexts/ItemsContext';
import Particles from "../../../components/particles";
import IntegrationsImg06 from "../../../public/images/integrations-06.svg";

const AdminPage = () => {
    const { items, addItem, deleteItem } = useItems(); // Destructure addItem and deleteItem from useItems
    const [newItem, setNewItem] = useState({
        img: '',
        name: '',
        description: '',
        link: '',
        featured: false,
        category: 'Clubs'
    });

    const nextId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItemWithId = { ...newItem, id: nextId };
        if (!newItem.img) {
            newItemWithId.img = IntegrationsImg06;
        }
        addItem(newItemWithId);
        setNewItem({
            img: '',
            name: '',
            description: '',
            link: '',
            featured: false,
            category: 'Clubs'
        })
    };

    const handleDeleteItem = (id) => {
        deleteItem(id); // Call deleteItem from the context
    };

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
                        <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Admin Page</h1>

                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-8">
                        {/* Display current items */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Current Items</h2>
                            <ul>
                                {items.map(item => (
                                    <li key={item.id} className="flex justify-between items-center">
                                        <span>{item.name}</span>
                                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Add a new event */}
                        <div>
                            <h3 className="text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Add New Event Item</h3>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                                <div className="flex w-full">
                                    <div className="w-1/3 mr-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: *</label>
                                        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="w-1/3 mr-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL:</label>
                                        <input type="text" name="img" value={newItem.img} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="w-1/4">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category:*</label>
                                        <select name="category" value={newItem.category} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                            <option value="Clubs">Clubs</option>
                                            <option value="Tournaments">Tournaments</option>
                                        </select>
                                    </div>
                                </div>


                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:*</label>
                                <textarea name="description" value={newItem.description} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                                <button type="submit" className="btn-primary">Add Item</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPage;