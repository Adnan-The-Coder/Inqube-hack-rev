"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

const logo = "/assets/Images/logo.png";

// Create a context for user authentication
export const UserContext = createContext<{
  user: User | null;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => void;
  authError: string | null;
}>({
  user: null,
  handleSignIn: async () => {},
  handleSignOut: () => {},
  authError: null,
});

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

const firebaseConfig = {
  apiKey: "AIzaSyC7BxJICnYuikbCybJYwSQbV4LyswrnMZs",
  authDomain: "inqube-25.firebaseapp.com",
  projectId: "inqube-25",
  storageBucket: "inqube-25.appspot.com",
  messagingSenderId: "588510225974",
  appId: "1:588510225974:web:382b095d7c2e72e7ae5a97",
  measurementId: "G-JQVWG51VRQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Context Provider to manage authentication
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Error parsing saved user:", e);
        localStorage.removeItem("user");
      }
    }
    // Monitor auth state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      }
    });

return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      setAuthError(null);
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error: any) {
      console.error("Error signing in:", error);
      setAuthError("An unexpected error occurred. Please try again.");
      setTimeout(() => setAuthError(null), 5000);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        setAuthError("Error signing out. Please try again.");
        setTimeout(() => setAuthError(null), 5000);
      });
  };

  return (
    <UserContext.Provider value={{ user, handleSignIn, handleSignOut, authError }}>
      {children}
    </UserContext.Provider>
  );
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const { user, handleSignIn, handleSignOut, authError } = useUser();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    
return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Contact", href: "/contact" },
  ];

  // **Force Update Profile Picture**
  const profileImage = user?.photoURL ? `${user.photoURL}?t=${new Date().getTime()}` : "/default-avatar.png";

  return (
    <div className={`fixed left-0 top-0 z-50 w-full ${isScrolled ? "bg-[#0a0a0a] shadow-lg" : "bg-transparent"} transition-all duration-300`}>
      {authError && (
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-lg bg-red-600 px-6 py-3 text-white shadow-lg">
          {authError}
        </div>
      )}
      <div className="flex items-center justify-between p-2 text-white md:px-8">
        <Link href="/">
          <Image src={logo} width={500} height={500} alt="Logo" className="w-32 md:w-44" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden space-x-6 lg:flex">
          {menuItems.map((item, index) => (
            <li key={index} className="transition-all hover:text-[#76b900]">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* User Profile / Auth Buttons */}
        <div className="hidden items-center space-x-4 lg:flex">
          {user ? (
            <div className="relative" onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)}>
              <Image
                src={profileImage}
                alt="User Profile"
                width={40}
                height={40}
                priority={true}
                className="cursor-pointer rounded-full object-cover shadow-md"
              />
              {isProfileHovered && (
                <div className="absolute right-0 top-10 w-36 rounded-lg bg-[#1a1a1a] p-3 text-white shadow-xl">
                  <Link href="/profile" className="block px-3 py-2 text-sm hover:text-[#76b900]">Profile</Link>
                  <button onClick={handleSignOut} className="w-full rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={handleSignIn} className="rounded-full bg-[#76b900] px-5 py-2 text-white shadow-md hover:scale-105 hover:bg-[#5e9400]">
              Sign in
            </button>
          )}
        </div>
        {/* Hamburger Menu */}
        <button className="text-3xl lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black bg-opacity-90">
          <button className="absolute right-4 top-4 text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            ✖
          </button>
          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-xl text-white hover:text-[#76b900]" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            {user ? (
              <div className="relative" onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)}>
                <Link href="/profile">
                  <Image
                  src={profileImage}
                  alt="User Profile"
                  width={50}
                  height={50}
                  priority={true}
                  className="cursor-pointer rounded-full object-cover shadow-md"
                />
                </Link>
                <div className="absolute right-[-50px] top-14 w-36 rounded-lg p-3 text-white shadow-xl">
                  <button onClick={handleSignOut} className="w-full rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700">
                    Sign Out
                  </button>
                </div>
              </div>
          ) : (
            <button onClick={handleSignIn} className="rounded-full bg-[#76b900] px-5 py-2 text-white shadow-md hover:scale-105 hover:bg-[#5e9400]">
              Sign in
            </button>
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
