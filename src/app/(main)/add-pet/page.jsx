"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Card, Input, Button, TextArea } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const AddPetForm = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  
    const user = session?.user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const petData = {
        ...data,
        age: Number(data.age),
        adoptionFee: Number(data.adoptionFee),
        ownerEmail: user?.email,
        ownerName: user?.name,
        ownerName: user?.name,
      };

      const res = await fetch("http://localhost:8080/pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.message || "Failed to add pet");
      }

      toast.success("Pet added successfully!");

      reset();

      router.push("/dashboard/my-listings");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <Card className="mx-auto max-w-5xl rounded-3xl p-8 shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Add a Pet for Adoption</h2>

        <p className="mt-2 text-default-500">
          Fill out the form below to help your pet find a loving forever home.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* Pet Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Pet Name</label>

          <Input
            placeholder="Enter pet name"
            {...register("petName", {
              required: "Pet name is required",
            })}
          />

          {errors.petName && (
            <p className="mt-1 text-sm text-danger">{errors.petName.message}</p>
          )}
        </div>

        {/* Species */}
        <div>
          <label className="mb-2 block text-sm font-medium">Species</label>

          <select
            {...register("species", {
              required: "Species is required",
            })}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Fish">Fish</option>
          </select>

          {errors.species && (
            <p className="mt-1 text-sm text-danger">{errors.species.message}</p>
          )}
        </div>

        {/* Breed */}
        <div>
          <label className="mb-2 block text-sm font-medium">Breed</label>

          <Input
            placeholder="Enter breed"
            {...register("breed", {
              required: "Breed is required",
            })}
          />

          {errors.breed && (
            <p className="mt-1 text-sm text-danger">{errors.breed.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="mb-2 block text-sm font-medium">Age</label>

          <Input
            type="number"
            placeholder="Enter pet age"
            {...register("age", {
              required: "Age is required",
            })}
          />

          {errors.age && (
            <p className="mt-1 text-sm text-danger">{errors.age.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="mb-2 block text-sm font-medium">Gender</label>

          <select
            {...register("gender", {
              required: "Gender is required",
            })}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {errors.gender && (
            <p className="mt-1 text-sm text-danger">{errors.gender.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="mb-2 block text-sm font-medium">Image URL</label>

          <Input
            placeholder="https://..."
            {...register("image", {
              required: "Image URL is required",
            })}
          />

          {errors.image && (
            <p className="mt-1 text-sm text-danger">{errors.image.message}</p>
          )}
        </div>

        {/* Health Status */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Health Status
          </label>

          <select
            {...register("healthStatus", {
              required: "Health conditon is required",
            })}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select Condition</option>
            <option value="Healthy">Healthy</option>
            <option value="Scick">Sick</option>
          </select>

          {errors.healthStatus && (
            <p className="mt-1 text-sm text-danger">
              {errors.healthStatus.message}
            </p>
          )}
        </div>

        {/* Vaccination Status */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Vaccination Status
          </label>

          <select
            {...register("vaccinationStatus", {
              required: "vaccination Status is required",
            })}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select vaccination</option>
            <option value="vaccinated">vaccinated</option>
            <option value="Not vaccinated">Not vaccinated</option>
          </select>

          {errors.vaccinationStatus && (
            <p className="mt-1 text-sm text-danger">
              {errors.vaccinationStatus.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-medium">Location</label>

          <Input
            placeholder="Dhaka, Bangladesh"
            {...register("location", {
              required: "Location is required",
            })}
          />

          {errors.location && (
            <p className="mt-1 text-sm text-danger">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Adoption Fee */}
        <div>
          <label className="mb-2 block text-sm font-medium">Adoption Fee</label>

          <Input
            type="number"
            placeholder="Enter adoption fee"
            {...register("adoptionFee", {
              required: "Adoption fee is required",
            })}
          />

          {errors.adoptionFee && (
            <p className="mt-1 text-sm text-danger">
              {errors.adoptionFee.message}
            </p>
          )}
        </div>

        {/* Owner Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">Owner Email</label>

          <Input value={user?.email || ""} readOnly />
        </div>

        {/* Owner Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Owner Name</label>

          <Input
            value={user?.name || ""}
            placeholder={user?.name}
            readOnly
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2 ">
          <div className="flex flex-col">
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <TextArea
              placeholder="Tell adopters about your pet..."
              className="h-32 w-100"
              {...register("description", {
                required: "Description is required",
              })}
            />

            {errors.description && (
              <p className="mt-1 text-sm text-danger">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button
            type="submit"
            color="warning"
            size="lg"
            radius="full"
            isLoading={isSubmitting}
            className="w-full font-semibold"
          >
            Add Pet
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddPetForm;
