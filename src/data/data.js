const fetchPets = async () => {
          const res = await fetch("http://localhost:8080/pet");
          const data = await res.json();
          return data;
}
export default fetchPets;