"use client";

import { useState } from "react";

import { Card, Button, Chip } from "@heroui/react";
import { Heart } from "lucide-react";
import { PiFilePlusThin, PiPlusLight } from "react-icons/pi";
import AddPetForm from "../add-pet/page";
import { MyRequest } from "@/component/MyRequest";
import MyListings from "@/component/MyListing";
import MyListingsPage from "./my-listings/page";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("requests");

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Dashboard</h1>

        <p className="mt-2 text-default-500">
          Manage your pet adoption activities and listings.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Sidebar */}
        <Card
          shadow="lg"
          className="h-fit rounded-3xl border border-default-200 p-5 lg:col-span-3"
        >
          <div className="mb-6">
            <Chip
              color="warning"
              variant="flat"
              radius="full"
              className="px-4 py-5 text-sm font-semibold"
            >
              Dashboard Menu
            </Chip>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              radius="full"
              onPress={() => setActiveTab("requests")}
              className={`justify-start ${
                activeTab === "requests" ? "bg-success text-white" : ""
              }`}
            >
              <PiFilePlusThin /> My Requests
            </Button>

            <Button
              radius="full"
              onPress={() => setActiveTab("addPet")}
              className={`justify-start ${
                activeTab === "addPet" ? "bg-success text-white" : ""
              }`}
            >
              <PiPlusLight /> Add Pet
            </Button>

            <Button
              radius="full"
              onPress={() => setActiveTab("listings")}
              className={`justify-start ${
                activeTab === "listings" ? "bg-success text-white" : ""
              }`}
            >
              <Heart /> My Listings
            </Button>
          </div>
        </Card>

        {/* Right Content */}
        <div
          shadow="lg"
          className="rounded-3xl border border-default-200 lg:col-span-9"
        >
          
            {/* My Requests */}
            {activeTab === "requests" && (
              <div>
                <MyRequest/>

                <div className="mt-8 rounded-2xl bg-default-100 p-6">
                  <p className="text-default-600">
                    No adoption requests yet.
                  </p>
                </div>
              </div>
            )}

            {/* Add Pet */}
            {activeTab === "addPet" && (
              <div className="h-50vh">
                <AddPetForm />
              </div>
            )}

            {/* My Listings */}
            {activeTab === "listings" && (
              <div>
               {/* <MyListings/> */}
               <MyListingsPage/>
              </div>
            )}
         
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
