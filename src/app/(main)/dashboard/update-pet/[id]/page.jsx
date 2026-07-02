import { fetchPetDetails } from "@/data/data";
import UpdatePetForm from "@/component/UpdatePetForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const UpdatePetPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
      headers: await headers(),
    })

  const pet = await fetchPetDetails(id,token);

  return (
    <div className="container mx-auto w-11/12 py-10">

      <UpdatePetForm pet={pet} />
    </div>
  );
};

export default UpdatePetPage;