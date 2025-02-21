"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/logo.png";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

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
    <div className={`fixed w-full top-0 left-0 z-50 ${isScrolled ? "bg-[#0a0a0a] shadow-lg" : "bg-transparent"} transition-all duration-300`}>
      {authError && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {authError}
        </div>
      )}
      <div className="flex items-center justify-between text-white p-2 md:px-8">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-32 md:w-44" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-[#76b900] transition-all">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* User Profile / Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <div className="relative" onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)}>
              <Image
                src={profileImage}
                alt="User Profile"
                width={40}
                height={40}
                priority={true}
                className="rounded-full shadow-md cursor-pointer object-cover"
              />
              {isProfileHovered && (
                <div className="absolute top-10 right-0 bg-[#1a1a1a] text-white p-3 w-36 rounded-lg shadow-xl">
                  <Link href="/profile" className="block text-sm px-3 py-2 hover:text-[#76b900]">Profile</Link>
                  <button onClick={handleSignOut} className="w-full bg-red-600 text-sm text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={handleSignIn} className="bg-[#76b900] px-5 py-2 rounded-full shadow-md text-white hover:bg-[#5e9400] hover:scale-105">
              Sign in
            </button>
          )}
        </div>

        {/* Hamburger Menu */}
        <button className="lg:hidden text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center">
          <button className="absolute top-4 right-4 text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
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
                  className="rounded-full shadow-md cursor-pointer object-cover"
                />
              </Link>
                <div className="absolute top-14 right-[-50px] text-white p-3 w-36 rounded-lg shadow-xl">
                  <button onClick={handleSignOut} className="w-full bg-red-600 text-sm text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Sign Out
                  </button>
                </div>
            </div>
          ) : (
            <button onClick={handleSignIn} className="bg-[#76b900] px-5 py-2 rounded-full shadow-md text-white hover:bg-[#5e9400] hover:scale-105">
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
