"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const handleLogout = async () => await authClient.signOut();

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              P
            </div>

            <h1 className="text-xl font-bold text-gray-800">Pet Adoption</h1>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/pets"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                All Pets
              </Link>
            </li>

            <li>
              <Link
                href="/my-requests"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                My Requests
              </Link>
            </li>

            <li>
              <Link
                href="/add-pet"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Add Pet
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="relative">
                {/* PROFILE IMAGE */}
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <Image
                    height={100}
                    width={100}
                    src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
                  />
                </button>

                {/* DROPDOWN */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg overflow-hidden">
                    <div className="px-4 py-3 border-b">
                      <h3 className="font-semibold text-gray-800">
                        {user?.name}
                      </h3>

                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>

                    <Link
                      href="/dashboard"
                      className="block px-4 py-3 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl text-gray-700"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/pets"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  All Pets
                </Link>
              </li>

              <li>
                <Link
                  href="/my-requests"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  My Requests
                </Link>
              </li>

              <li>
                <Link
                  href="/add-pet"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Add Pet
                </Link>
              </li>

              {user ? (
                <>
                  <Link href="/dashboard" className="block text-gray-700">
                    Dashboard
                  </Link>

                  <button className="text-left text-red-500">Logout</button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg w-fit"
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
