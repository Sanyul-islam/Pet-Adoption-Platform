import { fetchPetDetails } from "@/data/data";
import PetDetails from "@/component/PetDetails";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const pet = await fetchPetDetails(id);

  if (!pet) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">Pet Not Found</h2>
      </div>
    );
  }

  return <PetDetails pet={pet} />;
};

export default DetailsPage;