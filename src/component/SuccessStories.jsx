import { Card, Avatar, Chip } from "@heroui/react";

const reviews = [
  {
    id: 1,
    name: "Sarah Ahmed",
    pet: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
    review:
      "Adopting Max completely changed our lives. He brought endless happiness and energy into our home. The entire adoption process was simple and wonderful.",
  },
  {
    id: 2,
    name: "Hasan Karim",
    pet: "Persian Cat",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Luna became part of our family from day one. She is playful, loving, and always keeps us smiling. We highly recommend pet adoption.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    pet: "Siamese Cat",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The platform helped us find the perfect companion. Bella is now enjoying her happiest life with us and we are so grateful.",
  },
];

const SuccessStories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <Chip
          color="warning"
          variant="flat"
          radius="full"
          className="mb-5 px-4 py-6 text-sm font-semibold"
        >
          Happy Adoption Stories
        </Chip>

        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Success Stories
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-default-500">
          Real stories from loving families who found their perfect companions
          and gave rescued pets a forever home filled with care and happiness.
        </p>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card
            key={review.id}
            shadow="lg"
            className="rounded-3xl border border-default-200 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* User */}
            <div className="mt-8 flex items-center gap-4">
              <Avatar>
                <Avatar.Image
                  alt={review?.name}
                  src={review?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  size="lg"
                  className="h-14 w-14"
                />
                <Avatar.Fallback>NM</Avatar.Fallback>
              </Avatar>
              <div>
                <h4 className="font-bold">{review.name}</h4>

                <p className="text-sm text-default-500">Adopted {review.pet}</p>
              </div>
            </div>
            {/* Review */}
            <p className="leading-relaxed text-default-600">
              “{review.review}”
            </p>
            {/* Stars */}
            <div className="mb-5 flex gap-1 text-2xl">⭐⭐⭐⭐⭐</div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
