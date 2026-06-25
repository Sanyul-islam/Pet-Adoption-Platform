"use client"
import Image from "next/image";
import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { Pencil, Trash2, PawPrint, EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { RequestModal } from "@/component/RequestModal";
import { toast } from "react-toastify";

const MyListingsPage = () => {
    
    const { data: session } = authClient.useSession();
            const user = session?.user;
            const [pets, setPets] = useState([]);
            const [requests, setRequests] = useState([]);
           

             const loadRequests = async (petId) => {
               const res = await fetch(
                 `http://localhost:8080/adoption-requests/${petId}`,
               );

               const data = await res.json();
               setRequests(data);
             };

             const handleApprove = async (id) => {
               try {
                 const res = await fetch(
                   `http://localhost:8080/adoption-requests/approve/${id}`,
                   {
                     method: "PATCH",
                   },
                 );

                 const data = await res.json();

                 if (data.modifiedCount > 0) {
                   toast.success("Request approved!");

                   setRequests((prev) =>
                     prev.map((request) =>
                       request._id === id
                         ? { ...request, status: "approved" }
                         : request,
                     ),
                   );
                 }
               } catch (error) {
                 toast.error("Failed to approve request");
               }
             };

             const handleReject = async (id) => {
               try {
                 const res = await fetch(
                   `http://localhost:8080/adoption-requests/reject/${id}`,
                   {
                     method: "PATCH",
                   },
                 );

                 const data = await res.json();

                 if (data.modifiedCount > 0) {
                   toast.success("Request rejected!");

                   setRequests((prev) =>
                     prev.map((request) =>
                       request._id === id
                         ? { ...request, status: "rejected" }
                         : request,
                     ),
                   );
                 }
               } catch (error) {
                 toast.error("Failed to reject request");
                 console.error(error);
               }
             };

    
            useEffect(() => {
              if (!user?.email) return;

              const loadPets = async () => {
                const res = await fetch(
                  `http://localhost:8080/my-pets/${user.email}`,
                );
                const data = await res.json();

                setPets(data);
              };
            
              loadPets();
            }, [user?.email]);
        
          
        
          if (!pets) {
            return (
              <div className="py-20 text-center">
                <h2 className="text-3xl font-bold">Pet Not Found</h2>
              </div>
            );
          }
      const totalListings = pets.length;
      const availablePets = pets.filter((pet) => pet.status !== "Adopted").length;
      const adoptedPets = pets.filter((pet) => pet.status === "Adopted").length;
    
    return (
      <section className="space-y-8">
        <Card>
          {/* Heading */}
          <div>
            <h2 className="text-3xl font-bold">My Listings</h2>
            <p className="text-default-500">
              Manage your pets, view requests, and update listing details.
            </p>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <PawPrint className="size-10 text-warning" />
              <div>
                <p className="text-default-500">Total Listings</p>
                <h3 className="text-3xl font-bold">{totalListings}</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <PawPrint className="size-10 text-success" />
              <div>
                <p className="text-default-500">Available</p>
                <h3 className="text-3xl font-bold">{availablePets}</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <PawPrint className="size-10 text-danger" />
              <div>
                <p className="text-default-500">Adopted</p>
                <h3 className="text-3xl font-bold">{adoptedPets}</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Pet Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {pets.map((pet) => (
            <Card key={pet._id} className="overflow-hidden rounded-3xl">
              <div className="grid md:grid-cols-3">
                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src={pet.image}
                    alt={pet.petName}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <Chip
                    className="absolute top-1 right-1"
                    color={pet.status === "Adopted" ? "danger" : "success"}
                  >
                    {pet.status || "Available"}
                  </Chip>
                </div>

                {/* Content */}
                <div className="col-span-2 flex flex-col justify-between p-5">
                  <div>
                    <div className="mb-3 flex items-center gap-2 justify-between">
                      <div className="flex gap-2">
                        <h3 className="text-2xl font-bold">{pet.petName}</h3>
                        <Chip color="warning">{pet.species}</Chip>
                      </div>
                      <div className="font-medium">
                        {
                          requests.filter(
                            (request) => request.petId === pet._id,
                          ).length
                        }{" "}
                        Requests
                      </div>
                    </div>
                    <p className="mt-2 text-xl font-semibold text-primary">
                      <span>Price:</span>${pet.adoptionFee}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {/* View */}
                    <Link href={`/all-pets/${pet._id}`}>
                      <Button>
                        <EyeIcon size={18} /> View
                      </Button>
                    </Link>

                    {/* Edit */}
                    <Button
                      variant="tertiary"
                      onPress={() => console.log("Edit Pet")}
                    >
                      <Pencil size={18} /> Edit
                    </Button>

                    {/* Requests */}
                    <RequestModal
                      pet={pet}
                      requests={requests}
                      loadRequests={loadRequests}
                      handleApprove={handleApprove}
                      handleReject={handleReject}
                    />

                    {/* Delete */}
                    <Button
                      color="danger"
                      variant="danger"
                      onPress={() => console.log("Delete Pet")}
                    >
                      <Trash2 size={18} /> Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {pets.length === 0 && (
          <Card className="p-12 text-center">
            <h3 className="text-xl font-semibold">No Pets Listed Yet</h3>
            <p className="mt-2 text-default-500">
              Add your first pet listing to start receiving adoption requests.
            </p>
          </Card>
        )}
      </section>
    );
};

export default MyListingsPage;