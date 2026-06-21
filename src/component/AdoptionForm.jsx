"use client"
import { Modal } from "@heroui/react";
import { Controlled } from "@/component/DatePicker";
import { Button,TextField, Label, TextArea, FieldError, Description } from "@heroui/react";

const AdoptionForm = ({pet}) => {
    return (
      <Modal>
        <Button size="lg">Adopt Now</Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog>
              <Modal.CloseTrigger /> {/* Optional: Close button */}
              <Modal.Header>
                <Modal.Heading>
                  <div className="flex justify-center">
                    Request To Adopt {pet.petName}
                  </div>{" "}
                </Modal.Heading>
                <div className="mx-auto">
                  <p>Fill out this from the owner will review your request.</p>
                </div>
              </Modal.Header>
              <Modal.Body>
                <div className="space-y-3 text-default-600">
                  <p>
                    <span className="font-semibold text-foreground">Name:</span>{" "}
                    {pet.petName}
                  </p>

                  <p>
                    <span className="font-semibold text-foreground">
                      Owner Name:
                    </span>{" "}
                    {pet.ownerName}
                  </p>

                  <p>
                    <span className="font-semibold text-foreground">
                      owner Email:
                    </span>{" "}
                    {pet.ownerEmail}
                  </p>
                  {/** Date Picker **/}
                  <Controlled></Controlled>
                  {/** Text Aria **/}
                  <TextField
                    isRequired
                    name="bio"
                    validate={(value) => {
                      if (value.length < 10) {
                        return "Bio must be at least 10 characters";
                      }
                      return null;
                    }}
                  >
                    <Label>Message To Owner</Label>
                    <TextArea placeholder="Tell the owner why you want to adopt this pet... " />
                    <Description>Minimum 10 characters</Description>
                    <FieldError />
                  </TextField>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className="w-full" slot="close">
                  Confirm Adoption
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    );
};

export default AdoptionForm;