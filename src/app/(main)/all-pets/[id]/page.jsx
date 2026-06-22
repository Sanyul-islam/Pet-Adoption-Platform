
import Image from "next/image";
import Link from "next/link";
import { Card, Button, Chip, Avatar } from "@heroui/react";
import { fetchPetDetails } from "@/data/data";
import AdoptionForm from "@/component/AdoptionForm";


const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const pet = await fetchPetDetails(id);

  if (!pet) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">Pet Not Found</h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto w-11/12 px-4 py-12">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">Adopt Now!</h1>

        <p className="mt-4 text-default-500">
          Give this lovely pet a forever home.
        </p>
      </div>

      <Card
        shadow="lg"
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-100">
            <Image
              src={pet.image}
              alt={pet.petName}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8">
            <div className="flex items-center gap-3 border-b">
              <Avatar className="my-3">
                <Image
                  src={pet?.ownerImage || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt={pet?.ownerName}
                  fill
                  priority
                />
                <Avatar.Fallback>{pet.ownerName}</Avatar.Fallback>
              </Avatar>

              <div>
                <p className="font-semibold">{pet.ownerName}</p>

                <p className="text-sm text-default-500">{pet.ownerEmail}</p>
              </div>
            </div>
            <div>
              <div className="mb-4 flex mt-5 justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold">{pet.petName}</h2>

                  <Chip color="warning">{pet.species}</Chip>
                </div>

                <div className="">
                  <p>
                    <span className="font-semibold text-foreground text-xl">
                      Adoption Fee:
                    </span>{" "}
                    <span className="text-3xl text-blue-500 font-bold">
                      ${pet.adoptionFee}
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-default-600">
                <p>
                  <span className="font-semibold text-foreground">Breed:</span>{" "}
                  {pet.breed}
                </p>

                <p>
                  <span className="font-semibold text-foreground">Age:</span>{" "}
                  {pet.age} years
                </p>

                <p>
                  <span className="font-semibold text-foreground">Gender:</span>{" "}
                  {pet.gender}
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Location:
                  </span>{" "}
                  {pet.location}
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Health Status:
                  </span>{" "}
                  {pet.healthStatus}
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Vaccination:
                  </span>{" "}
                  {pet.vaccinationStatus}
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Description:
                  </span>{" "}
                  {pet.description}
                </p>
              </div>
            </div>

            {/* Owner */}
            <div className="mt-8 border-t pt-2">
              <div className="mt-6 flex gap-3">
                <Link href="/all-pets">
                  <Button
                    href="/all-pets"
                    variant="tertiary"
                    radius="full"
                    size="lg"
                  >
                    Back to Pets
                  </Button>
                </Link>

                <AdoptionForm pet={pet} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default DetailsPage;
