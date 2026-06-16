import { Button, Card , Chip } from '@heroui/react';
import React from 'react';

const CommunityImpact = () => {
    const stats = [
      {
        id: 1,
        number: "1,200+",
        title: "Pets Adopted",
      },
      {
        id: 2,
        number: "850+",
        title: "Happy Families",
      },
      {
        id: 3,
        number: "95%",
        title: "Successful Adoptions",
      },
      {
        id: 4,
        number: "24/7",
        title: "Community Support",
      },
    ];
    return (
      <section className="bg-default-100 py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Chip
              color="success"
              variant="flat"
              radius="full"
              className="mb-5 px-4 py-6 text-sm font-semibold"
            >
              Making Real Difference
            </Chip>

            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Our Community Impact
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-default-500">
              Every adoption creates a happier future for pets and families.
              Together, we are building a caring and compassionate community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.id}
                shadow="md"
                className="rounded-3xl border border-default-200 p-8 text-center"
              >
                <h3 className="text-5xl font-extrabold text-success">
                  {stat.number}
                </h3>

                <p className="mt-4 text-lg font-medium text-default-600">
                  {stat.title}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <Button
              color="success"
              radius="full"
              size="lg"
              className="px-10 font-semibold"
            >
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>
    );
};

export default CommunityImpact;