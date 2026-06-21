// src/app/not-found.jsx

"use client";

import Link from "next/link";
import { Button, Card } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <Card className="max-w-lg w-full shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Card.Header className="text-center justify-center py-14 px-8">
          {/* 404 */}
          <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>

          {/* MESSAGE */}
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>
          <div className="flex justify-center">
            {/* BUTTON */}
            <Link href={"/"}>
            <Button
              
              href="/"
              color="primary"
              size="lg"
              className="font-semibold"
            >
              ← Back to Home
            </Button>
            </Link>
          </div>
        </Card.Header>
      </Card>
    </div>
  );
}
