"use client"
import { Modal } from "@heroui/react";
import { Controlled } from "@/component/DatePicker";
import { Button,TextField, Label, TextArea, FieldError, Description } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";

const AdoptionForm = ({pet}) => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [pickupDate, setPickupDate] = useState(null);
  const [message, setMessage] = useState("");
 const handleSubmit = async () => {

   const requestData = {
     petId: pet._id,
     petName: pet.petName,
     userName: user.name,
     userEmail: user.email,
     ownerEmail: pet.ownerEmail,
     pickupDate: pickupDate?.toString(),
     message,
     status: "pending",
     createdAt: new Date(),
   };

   try {
     const res = await fetch("http://localhost:8080/adoption-requests", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(requestData),
     });

     const data = await res.json();

     if (data.insertedId) {
       toast.success("Adoption request sent!");

       
     }
   } catch (error) {
     toast.error("Failed to send request");
   }
 };
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
                  <Controlled
                    value={pickupDate}
                    onChange={setPickupDate}
                  ></Controlled>
                  {/** Text Aria **/}
                  <TextField
                    isRequired
                    name="message"
                    value={message}
                    onChange={setMessage}
                    validate={(value) => {
                      if (value.length < 10) {
                        return "message must be at least 10 characters";
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
                <Button onPress={handleSubmit} className="w-full" slot="close">
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