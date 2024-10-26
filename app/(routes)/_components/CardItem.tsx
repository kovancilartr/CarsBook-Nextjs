import React from "react";
import { CarProps } from "@/constans";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaUsers } from "react-icons/fa";
import { GiCarDoor, GiDiscGolfBag } from "react-icons/gi";
import { TbAutomaticGearbox } from "react-icons/tb";
import ButtonArrow from "./ButtonArrow";

interface CardItemProps {
  car: CarProps;
  currency?: string;
}

const CardItem = ({ car, currency }: CardItemProps) => {
  return (
    <Card className="w-full rounded-3xl cardBg group">
      <CardHeader>
        <Image src={car.imageUrl} alt={car.name} width={500} height={300} />
      </CardHeader>
      <CardContent>
        <div>
          <Badge variant="secondary" className="cardBadge cursor-default">
            {car.type}
          </Badge>
          <div className="mt-4">
            <h2 className="font-semibold text-xl line-clamp-1">
              {car.name}{" "}
              <span className="text-xs text-slate-400">• {car.year}</span>
            </h2>
            <div className="grid grid-cols-2 mt-8 gap-y-2 gap-x-4">
              <div className="flex items-center gap-1 cardText">
                <FaUsers />
                <span className="text-sm">{car.passengers} Yolcu</span>
              </div>
              <div className="flex items-center gap-1 cardText">
                <GiCarDoor />
                <span className="text-sm">{car.doors} Kapı</span>
              </div>
              <div className="flex items-center gap-1 cardText">
                <GiDiscGolfBag />
                <span className="text-sm">{car.bags}</span>
              </div>
              <div className="flex items-center gap-1 cardText">
                <TbAutomaticGearbox />
                <span className="text-sm">{car.transmission}</span>
              </div>
            </div>
          </div>
          <div className="border-b mt-8"></div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>
          <span className="font-semibold text-3xl">
            {Math.floor(
              currency === "dolar" ? car.pricePerDay / 30 : car.pricePerDay
            )}
          </span>
          <span className="text-sm">
            .
            {(
              (currency === "dolar" ? car.pricePerDay / 30 : car.pricePerDay) %
              1
            )
              .toFixed(2)
              .substring(2)}
          </span>
          <span className="text-myprimary">
            {currency === "dolar" ? " $" : " TL"}
          </span>
          / Gün
        </p>
        <ButtonArrow />
      </CardFooter>
    </Card>
  );
};

export default CardItem;
