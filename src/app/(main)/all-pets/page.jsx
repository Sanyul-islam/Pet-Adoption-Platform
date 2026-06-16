import Image from "next/image";
import Link from "next/link";

import { Card, Button, Chip, Avatar } from "@heroui/react";
import fetchPets from "@/data/data";

const AllPets = async () => {
  const pets = await fetchPets();
  return (
    <section className="container w-11/12 mx-auto  px-4 py-12">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Pets Available for Adoption
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-default-500">
          Every pet deserves a loving family. Discover adorable companions
          ready to bring joy, loyalty, and happiness into your life. 🐾
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <Card
            key={pet._id}
            className="overflow-hidden rounded-3xl border border-default-200"
            shadow="lg"
          >
            {/* Image */}
            <div className="relative h-50 w-full overflow-hidden">
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
            <div className="space-y-4 px-5">
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
                <p>
                  <span className="font-semibold text-foreground">
                    adoptionFee: $
                  </span>
                  {pet.adoptionFee}
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
                <Link href={`/all-pets/${pet._id}`}>
                  <Button variant="tertiary" radius="full" className="w-full">
                    View Details
                  </Button>
                </Link>
                <Link href={`/all-pets/${pet._id}`}>
                  <Button
                    color="warning"
                    radius="full"
                    className="w-full font-semibold"
                  >
                    Adopt Now
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AllPets;