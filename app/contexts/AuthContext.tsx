"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Item } from "@/app/contexts/ItemsContext";

type UserData = {
    userId: string;
    email: string;
    name: string;
    password: string;
    role: 'admin' | 'member';
    events: Item[];
    clubName?: string;
    clubDescription?: string;
};

type AuthContextType = {
    userId: string | null;
    session: boolean;
    setSession: (session: boolean) => void;
    isAdmin: boolean;
    setIsAdmin: (status: boolean) => void;
    user: UserData | null;
    signUp: (userData: UserData) => void;
    signIn: (email: string, password: string) => boolean;
    signOut: () => void;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [session, setSession] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [user, setUser] = useState<UserData | null>(null);
    const router = useRouter();

    const signUp = (userData: UserData) => {
        setUser(userData);
    };

    const signIn = (email: string, password: string): boolean => {
        if (user && user.email === email && user.password === password) {
            setSession(true);
            setIsAdmin(user.role === 'admin');
            return true;
        }
        return false;
    };

    const signOut = () => {
        setUser(null);
        setSession(false);
        setIsAdmin(false);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ userId: user?.userId || null, user, session, setSession, isAdmin, setIsAdmin, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
