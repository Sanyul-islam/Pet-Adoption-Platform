"use client";

import { Search } from "lucide-react";
import { Card, Input, Button } from "@heroui/react";

export default function PetFilters() {
  return (
    <Card className="mb-8 rounded-3xl p-6">
      <div className="grid grid-cols-1 gap-4 md:flex mx-auto">
        <div className="flex justify-center align-middle gap-3">
        <Input
          placeholder="Search pets by name..."
          // startContent={<Search size={18} />}
        />
        <Button variant="primary" className="mt-2">Seach</Button>
        </div>
        
        <select className="h-12 rounded-xl border border-default-200 bg-background px-4">
          <option value="All">All Species</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Bird">Bird</option>
        </select>

        <select className="h-12 rounded-xl border border-default-200 bg-background px-4">
          <option value="latest">Latest Added</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="age-low">Age (Low → High)</option>
          <option value="age-high">Age (High → Low)</option>
        </select>
      </div>
    </Card>
  );
}
