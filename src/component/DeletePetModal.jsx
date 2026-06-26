"use client";

import { Button, Modal } from "@heroui/react";
import { Trash2 } from "lucide-react";

const DeletePetModal = ({ pet, onDelete }) => {
  return (
    <Modal>
      <Button color="danger" variant="danger">
        <Trash2 size={18} />
        Delete
      </Button>

      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Delete Pet</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-default-600">
                Are you sure you want to delete
                <span className="font-semibold"> {pet.petName}</span>?
              </p>

              <p className="mt-2 text-sm text-danger">
                This action cannot be undone.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button
                color="danger"
                variant="danger"
                onPress={() => onDelete(pet._id)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeletePetModal;
