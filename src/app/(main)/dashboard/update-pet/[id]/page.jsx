import { fetchPetDetails } from "@/data/data";
import UpdatePetForm from "@/component/UpdatePetForm";

const UpdatePetPage = async ({ params }) => {
  const { id } = await params;

  const pet = await fetchPetDetails(id);

  return (
    <div className="container mx-auto w-11/12 py-10">

      <UpdatePetForm pet={pet} />
    </div>
  );
};

export default UpdatePetPage;