import { cache } from "react";

export const fetchPets = async (search = "", species = "") => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (species) params.append("species", species);

  const res = await fetch(
    `${process.env.CLIENT_SERVER_URL}/pet?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  return await res.json();
};

export const fetchPetDetails = async (id,token) => {
  
            
          const res = await fetch(
            `${process.env.CLIENT_SERVER_URL}/pet/${id}`,
            {
              headers: {
                authorization: `Bearer ${token}` || "",
              },
            },
          );
          console.log(res.status);
          const data = await res.json();
          return data || {};
}
