import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section className="bgone py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 rounded-xl">
        <div className="bg-mysecondary text-white p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
            accusamus.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-white mr-2" size={24} />
              <p className="text-white">+90 555 555 555</p>
            </div>
            <div className="flex items-center">
              <Mail className="text-white mr-2" size={24} />
              <p className="text-white">kovancilar@mail.com</p>
            </div>
            <div className="flex items-center">
              <MapPin className="text-white mr-2" size={24} />
              <p className="text-white">Test Street 123, Test City</p>
            </div>
          </div>
        </div>

        <div className="bgone">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium heroFormLabel"
              >
                First Name
              </label>
              <Input
                type="text"
                className="mt-1 block w-full border-gray-300"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium heroFormLabel"
              >
                Last Name
              </label>
              <Input
                type="text"
                className="mt-1 block w-full border-gray-300"
                placeholder="Enter Your Last Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium heroFormLabel"
              >
                Email
              </label>
              <Input
                type="text"
                className="mt-1 block w-full border-gray-300"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium heroFormLabel"
              >
                Phone
              </label>
              <Input
                type="text"
                className="mt-1 block w-full border-gray-300"
                placeholder="Enter Your Phone"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium heroFormLabel"
              >
                Message
              </label>
              <Textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter Your Message"
              />
            </div>
            <div className="md:col-span-2 flex items-center">
              <Button
                type="submit"
                variant="myButton"
                size="lg"
                className="w-full"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
