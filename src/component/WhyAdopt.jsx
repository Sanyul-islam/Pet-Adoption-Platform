import { Card } from "@heroui/react";

const WhyAdopt = () => {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Why Adopt Pets?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-default-500">
            Adopting a pet is more than bringing home an animal — it’s giving a
            loving companion a second chance at happiness. Pets bring joy,
            comfort, loyalty, and unforgettable memories into our lives every
            single day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="rounded-3xl border border-default-200 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-5 text-5xl">🐾</div>

              <h3 className="text-2xl font-bold">Save a Life</h3>

              <p className="mt-4 leading-relaxed text-default-500">
                Millions of pets wait in shelters for a caring family. Adoption
                gives them a safe and loving forever home.
              </p>
            
          </Card>
          {/* Card 2 */}
          <Card
             className="rounded-3xl border border-default-200  p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-5 text-5xl">❤️</div>

              <h3 className="text-2xl font-bold">Unconditional Love</h3>

              <p className="mt-4 leading-relaxed text-default-500">
                Pets become loyal companions who provide comfort, emotional
                support, and endless happiness every day.
              </p>
            
          </Card>

          {/* Card 3 */}
          <Card className="rounded-3xl border border-default-200  p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-5 text-5xl">🏡</div>

              <h3 className="text-2xl font-bold">Build a Happy Home</h3>

              <p className="mt-4 leading-relaxed text-default-500">
                Adopting pets creates stronger emotional connections and fills
                your home with warmth, fun, and companionship.
              </p>
          </Card>
        </div>
      </section>
    );
};

export default WhyAdopt;