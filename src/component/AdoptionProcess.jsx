import { Card, Button, Chip, Avatar } from "@heroui/react";

const AdoptionProcess = () => {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Find Your Pet",
      description:
        "Browse hundreds of adorable pets and discover the perfect companion that matches your lifestyle.",
    },
    {
      id: 2,
      icon: "📝",
      title: "Submit Request",
      description:
        "Complete a simple adoption form and connect with the pet owner or shelter securely.",
    },
    {
      id: 3,
      icon: "🏡",
      title: "Bring Them Home",
      description:
        "Meet your new best friend and start a lifetime journey filled with love and happiness.",
    },
  ];

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
          Easy Adoption Journey
        </Chip>

        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          How Adoption Works
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-default-500">
          Our adoption process is designed to make finding your perfect pet
          companion simple, secure, and joyful.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <Card
            key={step.id}
            shadow="lg"
            className="rounded-3xl border border-default-200 p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="mb-6 text-6xl">{step.icon}</div>

            <h3 className="text-2xl font-bold">{step.title}</h3>

            <p className="mt-4 leading-relaxed text-default-500">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AdoptionProcess;
