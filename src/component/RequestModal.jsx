"use client";

import { Button, Modal, Chip} from "@heroui/react";
import { MessageSquare } from "lucide-react";


export function RequestModal({
  requests = [],
  handleApprove,
  handleReject,
  pet,
  loadRequests,
}) {

  return (
    <Modal>
      <Button
        variant="secondary"
        onPress={() => {
          
          loadRequests(pet._id);
        }}
      >
        <MessageSquare size={18} />
        Requests
      </Button>

      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>
                Adoption Requests for {pet?.petName || "pet"}{" "}
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              {requests.length === 0 ? (
                <p className="py-8 text-center text-default-500">
                  No requests found.
                </p>
              ) : (
                <div className="space-y-4">
                  {requests.map((request) => (
                    <div
                      key={request._id}
                      className="rounded-2xl border border-default-200 p-5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {request.userName}
                        </h3>

                        <Chip
                          color={
                            request.status === "approved"
                              ? "success"
                              : request.status === "rejected"
                                ? "danger"
                                : "warning"
                          }
                          variant="flat"
                        >
                          {request.status || "pending"}
                        </Chip>
                      </div>

                      <div className="space-y-2">
                        <p>
                          <span className="font-semibold">Name:</span>{" "}
                          {request.userName}
                        </p>

                        <p>
                          <span className="font-semibold">Email:</span>{" "}
                          {request.userEmail}
                        </p>

                        <p>
                          <span className="font-semibold">Request Date:</span>{" "}
                          {request.requestDate}
                        </p>
                        <p>
                          <span className="font-semibold">Pickup Date:</span>{" "}
                          {request.pickupDate}
                        </p>
                      </div>

                      {request.status === "pending" && (
                        <div className="mt-5 flex gap-3">
                          <Button
                            color="success"
                            onPress={() => handleApprove(request._id)}
                          >
                            Approve
                          </Button>

                          <Button
                            color="danger"
                            variant="danger"
                            onPress={() => handleReject(request._id)}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
