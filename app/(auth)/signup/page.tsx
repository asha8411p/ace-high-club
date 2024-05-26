"use client";
import { useRouter } from 'next/navigation';
import AuthLogo from '../auth-logo';
import React, {useState} from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { v4 as uuidv4 } from 'uuid';

export default function SignUp() {
  const userId = uuidv4()
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState<'admin' | 'member' | ''>('');
  const [clubName, setClubName] = useState('');
  const [clubDescription, setClubDescription] = useState('');

  const { setSession, setIsAdmin, signUp } = useAuth(); // Get signUp function from AuthContext
  const router = useRouter();



  const renderClubData = () => {
    if (accountType === 'admin') {
      return (
          <div>
            <label htmlFor="club-name" className="block text-sm text-slate-300 font-medium mb-1">
              Club Name <span className="text-rose-500">*</span>
            </label>
            <input
                type="text"
                id="club-name"
                className="form-input w-full"
                placeholder="Enter club name"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                required
            />
            <label htmlFor="club-description" className="block text-sm text-slate-300 font-medium mb-1">
              Club Description <span className="text-rose-500">*</span>
            </label>
            <textarea
                id="club-description"
                className="form-input w-full"
                placeholder="Enter club description"
                value={clubDescription}
                onChange={(e) => setClubDescription(e.target.value)}
                required
            />
          </div>
      );
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSignUp();
  };

  const handleSignUp = async () => {
    try {
      const userData = {
        userId,
        email,
        name: fullName,
        password,
        role: accountType as 'admin' | 'member',  // Ensure the type is correct
        events: [],
        clubName: accountType === 'admin' ? clubName : undefined,
        clubDescription: accountType === 'admin' ? clubDescription : undefined,
      };
      if (userData.role == 'admin'){
        setIsAdmin(true)
      }
      setSession(true)
      signUp(userData); // Call signUp function with user data
      router.push(`/profile/${userId}`); // Redirect to profile page after successful sign-up
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
      <>
        <div className="max-w-3xl mx-auto text-center pb-12">
          <AuthLogo />
          <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
            Create your free account
          </h1>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full-name" className="block text-sm text-slate-300 font-medium mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                  id="full-name"
                  className="form-input w-full"
                  type="text"
                  placeholder="E.g., Mark Rossi"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 font-medium mb-1">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                  id="email"
                  className="form-input w-full"
                  type="email"
                  placeholder="markrossi@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-slate-300 font-medium mb-1">
                Password <span className="text-rose-500">*</span>
              </label>
              <input
                  id="password"
                  className="form-input w-full"
                  type="password"
                  autoComplete="on"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>
            <div>
              <label htmlFor="account-type" className="block text-sm text-slate-300 font-medium mb-1">
                Account Type <span className="text-rose-500">*</span>
              </label>
              <select
                  id="account-type"
                  className="form-select text-sm py-2 w-full"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value as 'admin' | 'member')}
                  required
              >
                <option value="">Select Account Type</option>
                <option value="admin">Admin</option>
                <option value="member">Member</option>
              </select>
            </div>
            {renderClubData()}
            <div className="mt-6">
              <button className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group">
                Sign Up{' '}
                <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
              </button>
            </div>
          </form>
        </div>
      </>
  );
}
