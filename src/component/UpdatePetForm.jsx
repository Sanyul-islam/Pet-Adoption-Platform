"use client";

import { Button, Card, Input, TextArea } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdatePetForm = ({ pet }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    petName: pet.petName || "",
    species: pet.species || "",
    breed: pet.breed || "",
    age: pet.age || "",
    gender: pet.gender || "",
    image: pet.image || "",
    healthStatus: pet.healthStatus || "",
    vaccinationStatus: pet.vaccinationStatus || "",
    location: pet.location || "",
    adoptionFee: pet.adoptionFee || "",
    description: pet.description || "",
    ownerName: pet.ownerName || "",
    ownerEmail: pet.ownerEmail || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8080/pet/${pet._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Pet updated successfully");
        router.push("/dashboard/my-listings");
      } else {
        toast.info("No changes were made.");
        router.push("/dashboard/my-listings");
      }
    } catch (error) {
      toast.error("Failed to update pet");
    }
  };

  return (
    <Card className="mx-auto max-w-5xl rounded-3xl p-8 shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Update Pet Information</h2>

        <p className="mt-2 text-default-500">
          Edit your pet information below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* Pet Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Pet Name</label>

          <Input
            name="petName"
            value={formData.petName}
            onChange={handleChange}
          />
        </div>

        {/* Species */}
        <div>
          <label className="mb-2 block text-sm font-medium">Species</label>

          <select
            name="species"
            value={formData.species}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Fish">Fish</option>
          </select>
        </div>

        {/* Breed */}
        <div>
          <label className="mb-2 block text-sm font-medium">Breed</label>

          <Input name="breed" value={formData.breed} onChange={handleChange} />
        </div>

        {/* Age */}
        <div>
          <label className="mb-2 block text-sm font-medium">Age</label>

          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div>
          <label className="mb-2 block text-sm font-medium">Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 block text-sm font-medium">Image URL</label>

          <Input name="image" value={formData.image} onChange={handleChange} />
        </div>

        {/* Health */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Health Status
          </label>

          <select
            name="healthStatus"
            value={formData.healthStatus}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select Condition</option>
            <option value="Healthy">Healthy</option>
            <option value="Sick">Sick</option>
          </select>
        </div>

        {/* Vaccination */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Vaccination Status
          </label>

          <select
            name="vaccinationStatus"
            value={formData.vaccinationStatus}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-default-200 bg-background px-4 outline-none"
          >
            <option value="">Select Vaccination</option>
            <option value="vaccinated">Vaccinated</option>
            <option value="Not vaccinated">Not Vaccinated</option>
          </select>
        </div>
        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-medium">Location</label>

          <Input
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        {/* Adoption Fee */}
        <div>
          <label className="mb-2 block text-sm font-medium">Adoption Fee</label>

          <Input
            type="number"
            name="adoptionFee"
            value={formData.adoptionFee}
            onChange={handleChange}
          />
        </div>

        {/* Owner Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">Owner Email</label>

          <Input value={formData.ownerEmail} readOnly />
        </div>

        {/* Owner Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Owner Name</label>

          <Input value={formData.ownerName} readOnly />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">Description</label>

          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell adopters about your pet..."
            className="min-h-32- w-100"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button
            type="submit"
            color="warning"
            size="lg"
            radius="full"
            className="w-full font-semibold"
          >
            Update Pet
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UpdatePetForm;