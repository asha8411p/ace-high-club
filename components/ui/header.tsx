"use client"
import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/contexts/AuthContext";

export default function Header() {
  const router = useRouter();
  const { session, setSession, setIsAdmin } = useAuth();
  const signInRef = useRef(null);
  const registerRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(session);
  }, [session]);

  const handleLogout = () => {
    setIsAdmin(false);
    setSession(false);
    router.push('/')
  }
  const handleSignIn = () => {
    setSession(false)
    router.push('/signin');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="flex-1">
              <Logo />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop menu links */}
              <ul className="flex grow justify-center flex-wrap items-center">
                <li>
                  <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/integrations">
                    Clubs and Tournaments
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/customers">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/changelog">
                    Learn Poker
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Sign-in and Register dropdowns */}
            <ul className="flex-1 flex justify-end items-center">
              {!isLoggedIn ? (
                  <>
                    <li className="relative" ref={signInRef}>
                      <button
                          className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out focus:outline-none"
                          onClick={handleSignIn}
                      >
                        Sign in
                      </button>
                    </li>
                    <li className="ml-6 relative" ref={registerRef}>
                      <button
                          className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group focus:outline-none"
                          onClick={handleSignUp}
                      >
                        Register <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                      </button>
                    </li>
                  </>
              ) : (
                  <>
                    <li>
                      <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/profile/1">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                          onClick={handleLogout}
                          className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out focus:outline-none"
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
              )}
            </ul>

            <MobileMenu />
          </div>
        </div>
      </header>
  );
}
