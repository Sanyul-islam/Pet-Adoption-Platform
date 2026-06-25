
export const fetchPets = async (search = "", species = "") => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (species) params.append("species", species);

  const res = await fetch(`http://localhost:8080/pet?${params.toString()}`, {
    cache: "no-store",
  });

  return await res.json();
};

export const fetchPetDetails = async (id) => {
            
          const res = await fetch(`http://localhost:8080/pet/${id}`);
          const data = await res.json();
          return data || {};
}
