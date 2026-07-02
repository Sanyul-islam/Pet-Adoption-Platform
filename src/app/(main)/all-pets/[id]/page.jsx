import { fetchPetDetails } from "@/data/data";
import PetDetails from "@/component/PetDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers(),
  })

  const pet = await fetchPetDetails(id,token);

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