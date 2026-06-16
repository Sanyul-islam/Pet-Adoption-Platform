"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, Button, Chip, Avatar } from "@heroui/react";

const Pets =  () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
      const fetchPets = async () => {
        try {
          const res = await fetch("http://localhost:8080/pet");
          const data = await res.json();

          setPets(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchPets();
    }, []);
  return (
    <section className="container w-11/12 mx-auto  px-4 py-12">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <Chip
                  color="warning"
                  variant="flat"
                  radius="full"
                  className="mb-5 px-4 py-6 text-sm font-semibold"
                >
                 Featured Pets
                </Chip>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Pets Available for Adoption
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-default-500">
          Discover loving pets looking for their forever homes. From playful
          puppies to adorable kittens, every pet deserves care, happiness, and a
          family to call their own. Start your adoption journey today and meet
          your perfect companion.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pets.slice(0,6).map((pet) => (
          <Card
            key={pet._id}
            className="overflow-hidden rounded-3xl border border-default-200"
            shadow="lg"
          >
            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={pet.image}
                alt={pet.petName}
                fill
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,33vw"
                className="object-cover transition duration-500 hover:scale-110"
              />

              <div className="absolute right-4 top-4">
                <Chip color="warning" radius="full">
                  {pet.species}
                </Chip>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
              <h2 className="text-2xl font-bold">{pet.petName}</h2>

              <div className="space-y-2 text-default-600">
                <p>
                  <span className="font-semibold text-foreground">
                    Description:
                  </span>{" "}
                  {pet.description}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Age:</span>{" "}
                  {pet.age}
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Location:
                  </span>{" "}
                  {pet.location}
                </p>
              </div>
              <Card.Footer className="flex gap-2">
                <Avatar
                  aria-label={`${pet.ownerName}'s profile picture`}
                  className="size-5"
                >
                  <Avatar.Image
                    alt={`${pet.ownerName}'s Avater`}
                    src={
                      pet?.ownerImage || "https://i.ibb.co/4pDNDk1/avatar.png"
                    }
                  />
                  <Avatar.Fallback className="text-xs">IH</Avatar.Fallback>
                </Avatar>
                <span className="text-xs">By {pet.ownerName}</span>
              </Card.Footer>
              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  as={Link}
                  href={`/pets/${pet._id}`}
                  variant="tertiary"
                  radius="full"
                  className="w-full"
                >
                  View Details
                </Button>
                <Link href={"/"}>
                </Link>
                <Button
                  as={Link}
                  href={`/adopt/${pet._id}`}
                  color="warning"
                  radius="full"
                  className="w-full font-semibold"
                >
                  Adopt Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
        {/* CTA */}
      <div className="mt-16 flex justify-center">
      <Link href={"/all-pets"}>
        <Button
          color="secondary"
          radius="full"
          size="lg"
          className="px-10 font-semibold"
        >
          Browse All Listed Pets
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default Pets;
