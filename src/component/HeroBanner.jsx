"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";

export default function Banner() {
  return (
    <section className="overflow-hidden bg-linear-to-br from-orange-50 to-pink-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold leading-tight text-gray-800 md:text-6xl">
            Find Your
            <span className="text-orange-500"> Perfect Pet</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Thousands of adorable pets are waiting for a loving family. Start
            your adoption journey today and bring happiness home.
          </p>

          <div className="mt-8 gap-4 flex">
            <Link href="/all-pets">
              <Button
                color="warning"
                radius="full"
                size="lg"
                className="px-8 font-semibold"
              >
                Adopt Now
              </Button>
            </Link>
            <Link href="/add-pet">
              <Button
                color="warning"
                radius="full"
                size="lg"
                className="px-8 font-semibold"
              >
               <Plus/> Add-Pets
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
              alt="Cute Pet"
              width={500}
              height={500}
              priority
              className="h-auto w-full rounded-[40px] object-cover shadow-2xl"
            />
          </motion.div>

          {/* Background Blur */}
          <div className="absolute -bottom-10 -left-10 -z-10 h-72 w-72 rounded-full bg-orange-300/40 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
