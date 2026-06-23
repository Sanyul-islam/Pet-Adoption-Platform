"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { Eye, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function MyRequests() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const loadRequests = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/my-requests/${user.email}`,
        );

        const data = await res.json();

        setRequests(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadRequests();
  }, [user?.email]);

  const handleCancel = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this request?",
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:8080/adoption-requests/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Request cancelled successfully!");

        setRequests((prev) => prev.filter((request) => request._id !== id));
      }
    } catch (error) {
      toast.error("Failed to cancel request");
      console.error(error);
    }
  };

  if (loading) {
    return <div className="py-10 text-center">Loading requests...</div>;
  }

  return (
    <div className="m-4">
      <h2 className="mb-6 text-3xl font-bold text-center">My Adoption Requests</h2>

      {requests.length === 0 ? (
        <Card>
          <Card.content>
            <p className="text-center text-default-500">No requests found.</p>
          </Card.content>
        </Card>
      ) : (
        <div className="grid gap-5">
          {requests.map((request) => (
            <Card key={request._id}>
              <Card.Content>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <h3 className="text-xl font-bold">{request.petName}</h3>
                      <Chip
                        color={
                          request.status === "approved"
                            ? "success"
                            : request.status === "rejected"
                              ? "danger"
                              : "warning"
                        }
                      >
                        {request.status}
                      </Chip>
                    </div>

                    <p>
                      <span className="font-semibold">Request Date:</span>{" "}
                      {new Date(request.createdAt).toLocaleDateString()}
                    </p>

                    <p>
                      <span className="font-semibold">Pickup Date:</span>{" "}
                      {request.pickupDate}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/all-pets/${request.petId}`}>
                      <Button color="primary">
                        <Eye size={18} /> View
                      </Button>
                    </Link>

                    <Button
                      color="danger"
                      variant="danger"
                      onPress={() => handleCancel(request._id)}
                    >
                      <Trash2 size={18} /> Cancel
                    </Button>
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
