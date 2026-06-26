"use client";

import { Label, SearchField, ListBox, Select } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PetFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value.trim()) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    router.push(`/all-pets?${params.toString()}`);
  };

const handleSpecies = (value) => {
  const params = new URLSearchParams(searchParams.toString());

  if (value) {
    params.set("species", value);
  } else {
    params.delete("species");
  }

  router.push(`/all-pets?${params.toString()}`);
};

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2">
      <SearchField name="search">
        <Label>Search</Label>

        <SearchField.Group>
          <SearchField.SearchIcon />

          <SearchField.Input
            className="w-70"
            placeholder="Search by pet name..."
            onChange={handleSearch}
          />
        </SearchField.Group>
      </SearchField>

      <Select placeholder="Filter by Species" onChange={handleSpecies}>
        <Label>Species</Label>

        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            <ListBox.Item id="" textValue="All Species">
              All
            </ListBox.Item>
            <ListBox.Item id="Dog" textValue="Dog">
              Dog
            </ListBox.Item>

            <ListBox.Item id="Cat" textValue="Cat">
              Cat
            </ListBox.Item>

            <ListBox.Item id="Bird" textValue="Bird">
              Bird
            </ListBox.Item>

            <ListBox.Item id="Rabbit" textValue="Rabbit">
              Rabbit
            </ListBox.Item>

            <ListBox.Item id="Fish" textValue="Fish">
              Fish
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
}
