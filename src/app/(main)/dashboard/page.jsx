"use client";

import { useState } from "react";

import { Card, Button, Chip } from "@heroui/react";

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
              color={activeTab === "requests" ? "warning" : "default"}
              variant={activeTab === "requests" ? "solid" : "bordered"}
              radius="full"
              className="justify-start"
              onPress={() => setActiveTab("requests")}
            >
              My Requests
            </Button>

            <Button
              color={activeTab === "addPet" ? "warning" : "default"}
              variant={activeTab === "addPet" ? "solid" : "bordered"}
              radius="full"
              className="justify-start"
              onPress={() => setActiveTab("addPet")}
            >
              Add Pet
            </Button>

            <Button
              color={activeTab === "listings" ? "warning" : "default"}
              variant={activeTab === "listings" ? "solid" : "bordered"}
              radius="full"
              className="justify-start"
              onPress={() => setActiveTab("listings")}
            >
              My Listings
            </Button>
          </div>
        </Card>

        {/* Right Content */}
        <Card
          shadow="lg"
          className="rounded-3xl border border-default-200 p-8 lg:col-span-9"
        >
          {/* My Requests */}
          {activeTab === "requests" && (
            <div>
              <h2 className="text-3xl font-bold">My Requests</h2>

              <p className="mt-3 text-default-500">
                Here you can manage all your adoption requests and track their
                current status.
              </p>

              <div className="mt-8 rounded-2xl bg-default-100 p-6">
                <p className="text-default-600">
                  No adoption requests found yet.
                </p>
              </div>
            </div>
          )}

          {/* Add Pet */}
          {activeTab === "addPet" && (
            <div>
              <h2 className="text-3xl font-bold">Add Pet</h2>

              <p className="mt-3 text-default-500">
                Add a new pet listing and help them find a loving forever home.
              </p>

              <div className="mt-8 rounded-2xl bg-default-100 p-6">
                <p className="text-default-600">
                  Pet form component will appear here.
                </p>
              </div>
            </div>
          )}

          {/* My Listings */}
          {activeTab === "listings" && (
            <div>
              <h2 className="text-3xl font-bold">My Listings</h2>

              <p className="mt-3 text-default-500">
                View and manage all pets you have listed for adoption.
              </p>

              <div className="mt-8 rounded-2xl bg-default-100 p-6">
                <p className="text-default-600">
                  Your pet listings will appear here.
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
