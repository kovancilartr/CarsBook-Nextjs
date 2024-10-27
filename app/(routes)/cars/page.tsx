"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { carsData } from "@/constans";

const SectionBg = dynamic(() => import("../_components/SectionBg"), {ssr: false});
const CardItem = dynamic(() => import("../_components/CardItem"), {ssr: false});

const Cars = () => {
  const [filters, setFilters] = useState<{
    categories: string[];
    transmission: string[];
    priceRange: [number, number];
  }>({
    categories: [],
    transmission: [],
    priceRange: [0, 1000],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleFilterChange = (
    filterType: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value as never)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newRange,
    }));
  };

  const filteredCars = carsData.filter((car) => {
    if (
      filters.categories.length === 0 &&
      filters.transmission.length === 0 &&
      (filters.priceRange[0] === 0 || filters.priceRange[1] === 1000)
    ) {
      return true;
    }
    const isCategoryMatch =
      filters.categories.length === 0 || filters.categories.includes(car.type);

    const isTransmissionMatch =
      filters.transmission.length === 0 ||
      filters.transmission.includes(car.transmission);

    const isPriceMatch =
      car.pricePerDay >= filters.priceRange[0] &&
      car.pricePerDay <= filters.priceRange[1];

    return isCategoryMatch && isTransmissionMatch && isPriceMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div>
      <SectionBg title="Cars" source="Home" />
      <div className="flex flex-col md:flex-row container mx-auto mb-20 mt-5 px-4">
        <aside className="w-full md:w-1/4 px-6 py-4 filterBg rounded-xl mb-6 md:mb-0">
          <div className="mb-4">
            <h2 className="font-bold mb-2 text-lg">Categories</h2>
            {[
              "Compact Car",
              "Electric Car",
              "SUV",
              "Luxury Car",
              "Sedan",
              "Sports Car",
              "Crossover",
              "Luxury SUV",
            ].map((category, index) => (
              <div key={index} className="flex items-center mb-1">
                <Checkbox
                  id={category}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() =>
                    handleFilterChange("categories", category)
                  }
                />
                <label htmlFor={category} className="ml-2">
                  {category}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h2 className="font-bold mb-2 text-lg">Transmission</h2>
            {["Auto", "Manual"].map((transmission, index) => (
              <div key={index} className="flex items-center mb-1">
                <Checkbox
                  id={transmission}
                  checked={filters.transmission.includes(transmission)}
                  onCheckedChange={() =>
                    handleFilterChange("transmission", transmission)
                  }
                />
                <label htmlFor={transmission} className="ml-2">
                  {transmission}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h2 className="font-bold mb-2 text-lg">Price Range</h2>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col mb-2 md:mb-0">
                <Label>Min</Label>
                <Input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    handlePriceRangeChange([
                      Number(e.target.value),
                      filters.priceRange[1],
                    ])
                  }
                  className="w-full md:w-20 p-1 rounded-lg border"
                />
              </div>
              <div className="flex flex-col mb-2 md:mb-0">
                <Label>Max</Label>
                <Input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handlePriceRangeChange([
                      filters.priceRange[0],
                      Number(e.target.value),
                    ])
                  }
                  className="w-full md:w-20 p-1 rounded-lg border"
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="w-full md:w-3/4 pl-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCars.map((car, index) => (
              <CardItem key={index} car={car} />
            ))}
          </div>

          <div className="w-full flex justify-center mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="hover:rounded-4xl"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        className="rounded-full"
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  <PaginationNext
                    className="hover:rounded-4xl"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageChange(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
