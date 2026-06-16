import { Card, Chip, Button } from "@heroui/react";

const tips = [
  {
    id: 1,
    icon: "🥗",
    title: "Healthy Nutrition",
    description:
      "Provide balanced meals with proper nutrients to keep your pets healthy, energetic, and active every day.",
  },
  {
    id: 2,
    icon: "🏃",
    title: "Daily Exercise",
    description:
      "Regular walks and playtime help pets stay physically fit and mentally happy.",
  },
  {
    id: 3,
    icon: "💉",
    title: "Vaccination & Checkups",
    description:
      "Routine vet visits and vaccinations protect pets from diseases and ensure long-term wellness.",
  },
  {
    id: 4,
    icon: "🛁",
    title: "Clean & Groom",
    description:
      "Maintain hygiene with regular grooming, bathing, and cleaning to keep your pet comfortable.",
  },
  {
    id: 5,
    icon: "❤️",
    title: "Love & Attention",
    description:
      "Spend quality time with your pets to build trust, reduce stress, and strengthen emotional bonds.",
  },
  {
    id: 6,
    icon: "🏡",
    title: "Safe Environment",
    description:
      "Create a safe and comfortable home environment where your pet feels secure and loved.",
  },
];

const PetCareTips = () => {
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
          Pet Wellness Guide
        </Chip>

        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Pet Care Tips
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-default-500">
          Caring for pets goes beyond food and shelter. Discover helpful tips to
          keep your furry companions healthy, active, and happy every day.
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => (
          <Card
            key={tip.id}
            shadow="lg"
            className="rounded-3xl border border-default-200 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="mb-6 text-6xl">{tip.icon}</div>

            <h3 className="text-2xl font-bold">{tip.title}</h3>

            <p className="mt-4 leading-relaxed text-default-500">
              {tip.description}
            </p>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Button
          color="secondary"
          radius="full"
          size="lg"
          className="px-10 font-semibold"
        >
          Learn More Pet Care Tips
        </Button>
      </div>
    </section>
  );
};

export default PetCareTips;
