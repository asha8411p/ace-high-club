"use client"
import React, { useState } from 'react';
import Image from "next/image"
import ChatIcon from '/public/images/chat-icon.png'

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        // Here, you can implement logic to handle sending the message
        console.log('Sending message:', message);
        // For demonstration purposes, let's clear the message input
        setMessage('');
    };

    const toggleChatbox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer" onClick={toggleChatbox}>
                <Image src={ChatIcon} alt="Chatbot Icon" className="w-10 h-10"  />
            </div>
            {isOpen && (
                <>
                    <div className="bg-gray-100 bg-opacity-80 w-60 h-80 p-4 rounded-lg shadow-lg fixed bottom-4 right-20">
                        <div className="text-gray-700">How can I help you?</div>
                        <input
                            type="text"
                            value={message}
                            onChange={handleMessageChange}
                            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Type here..."
                        />
                        <button
                            onClick={sendMessage}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Send
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}