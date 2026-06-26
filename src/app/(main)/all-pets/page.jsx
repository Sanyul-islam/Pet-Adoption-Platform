import Image from "next/image";
import Link from "next/link";

import { Card, Button, Chip, Avatar } from "@heroui/react";
import {fetchPets} from "@/data/data";
import PetFilters from "@/component/PetFilters";

const AllPets = async ({ searchParams }) => {
    const params = await searchParams;

    const search = params?.search || "";
    const species = params?.species || "";

  const pets = await fetchPets(search, species);
  return (
    <section className="container w-11/12 mx-auto  px-4 py-12">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Pets Available for Adoption
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-default-500">
          Every pet deserves a loving family. Discover adorable companions ready
          to bring joy, loyalty, and happiness into your life. 🐾
        </p>
      </div>

      {/*Search,Filter section */}
      <div className="">
        <PetFilters />
      </div>

      {pets.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold">No Pets Found 🐾</h2>

          <p className="mt-2 text-default-500">
            No pets match your search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <Card
              key={pet._id}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-default-200"
              shadow="lg"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={pet.image}
                  alt={pet.petName}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-110"
                />

                <div className="absolute right-4 top-4">
                  <Chip color="warning" radius="full">
                    {pet.species}
                  </Chip>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="mb-3 text-2xl font-bold">{pet.petName}</h2>

                <div className="space-y-2 text-default-600">
                  <p className="line-clamp-3">
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
                      Adoption Fee:
                    </span>{" "}
                    ${pet.adoptionFee}
                  </p>
                </div>

                <div className="mt-auto pt-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Avatar>
                      <Image
                        src={
                          pet?.ownerImage ||
                          "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt={pet?.ownerName}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                      <Avatar.Fallback>
                        {pet?.ownerName?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>

                    <span className="text-sm text-default-500">
                      By {pet.ownerName}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link href={`/all-pets/${pet._id}`}>
                      <Button
                        variant="tertiary"
                        radius="full"
                        className="w-full"
                      >
                        View Details
                      </Button>
                    </Link>

                    {pet.adopted ? (
                      <Button color="success" isDisabled>
                        Adopted
                      </Button>
                    ) : (
                      <Link href={`/all-pets/${pet._id}`}>
                        <Button
                          color="warning"
                          radius="full"
                          className="w-full"
                        >
                          Adopt Now
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllPets;