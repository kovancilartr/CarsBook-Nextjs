"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaCalendarAlt, FaCar, FaMapMarkerAlt } from "react-icons/fa";

const today = new Date();
today.setHours(0, 0, 0, 0);

const formSchema = z
  .object({
    carType: z.string().nonempty("Lütfen Araç Tipi Giriniz"),
    pickupLocation: z.string().nonempty("Lütfen Araç Yerleştirme Yeri Giriniz"),
    pickupDate: z
      .date()
      .min(today, { message: "Lütfen Araç Yerleştirme Tarihi Giriniz" }),
    dropoffLocation: z.string().nonempty("Lütfen Araç Geri Dönüş Yeri Giriniz"),
    returnDate: z
      .date()
      .min(today, { message: "Lütfen Araç Geri Dönüş Tarihi Giriniz" }),
  })
  .refine((data) => data.pickupDate < data.returnDate, {
    message:
      "Lütfen Araç Yerleştirme Tarihi Geri Dönüş Tarihinden Önce Giriniz",
    path: ["pickupDate"],
  });

const HeroForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div
      className="absolute heroFormBg w-10/12 left-1/2 transform -translate-x-1/2 shadow-lg xl:rounded-full xl:bottom-[50px] 
    px-4 z-50 -bottom-[550px] rounded-2xl md:-bottom-[220px] lg:-bottom-[150px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-col-1 md:grid-cols-2 p-4 lg:grid-cols-8 xl:grid-cols-11 gap-8 heroFromLabel">
            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4">
              <FaCar className="text-4xl" />
              <FormField
                control={form.control}
                name="carType"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col items-center justify-center">
                    <FormLabel className="text-sm">Car Type</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="heroFromInputBg">
                          <SelectValue
                            className="bgone"
                            placeholder="Car Type Selected"
                          />
                        </SelectTrigger>
                        <SelectContent className="heroFromInputBg">
                          <SelectGroup>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="hatchback">Hatchback</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4">
              <FaMapMarkerAlt className="text-4xl" />
              <FormField
                control={form.control}
                name="pickupLocation"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col items-center justify-center">
                    <FormLabel className="text-sm">Pickup Location</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="heroFromInputBg">
                          <SelectValue
                            className="bgone"
                            placeholder="Location Selected"
                          />
                        </SelectTrigger>
                        <SelectContent className="heroFromInputBg">
                          <SelectGroup>
                            <SelectItem value="istanbul">İstanbul</SelectItem>
                            <SelectItem value="ankara">Ankara</SelectItem>
                            <SelectItem value="izmir">İzmir</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4">
              <FaCalendarAlt className="text-4xl" />
              <FormField
                control={form.control}
                name="pickupDate"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col items-center justify-center">
                    <FormLabel className="text-sm">Pickup Data</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "justify-start text-left font-normal heroFromInputBg w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 heroFromInputBg">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(data) => field.onChange(data)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4">
              <FaMapMarkerAlt className="text-4xl" />
              <FormField
                control={form.control}
                name="dropoffLocation"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col items-center justify-center">
                    <FormLabel className="text-sm">DropOff Location</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="heroFromInputBg">
                          <SelectValue
                            className="bgone"
                            placeholder="Location Selected"
                          />
                        </SelectTrigger>
                        <SelectContent className="heroFromInputBg">
                          <SelectGroup>
                            <SelectItem value="istanbul">İstanbul</SelectItem>
                            <SelectItem value="ankara">Ankara</SelectItem>
                            <SelectItem value="izmir">İzmir</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4">
              <FaCalendarAlt className="text-4xl" />
              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col items-center justify-center">
                    <FormLabel className="text-sm">Return Date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "justify-start text-left font-normal heroFromInputBg w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 heroFromInputBg">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(data) => field.onChange(data)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-center">
              <Button variant="myButton" size="lgRounded" type="submit">
                Araç Ara
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;
