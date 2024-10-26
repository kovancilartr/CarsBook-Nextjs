import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export interface HeaderDataProps {
  label: string;
  href: string;
}

export const headerData: HeaderDataProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Cars",
    href: "/cars",
  },
];

export interface FooterItemDataProps {
  title: string;
  items: { label: string; href: string }[];
}

export const footerData: FooterItemDataProps[] = [
  {
    title: "About",
    items: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        label: "Github",
        href: "https://github.com/kovancilar/matbook",
      },
      {
        label: "Blog",
        href: "https://kovancilar.medium.com/",
      },
    ],
  },
];

export type SocialMediaItemProps = {
  label: string;
  icon: React.ElementType;
};

export const socialMediaData: SocialMediaItemProps[] = [
  {
    label: "Github",
    icon: FaGithub,
  },
  {
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    label: "Youtube",
    icon: FaYoutube,
  },
];

export type SliderProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const sliderData: SliderProps[] = [
  {
    title: "Lorem ipsum dolor sit amet1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta ratione quo obcaecati blanditiis necessitatibus dolore laboriosam corrupti, omnis alias illo? Veritatis voluptas fugiat autem eos possimus non consequuntur esse.",
    image: "/slider/1.png",
    href: "/",
  },
  {
    title: "Lorem ipsum dolor sit amet2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta ratione quo obcaecati blanditiis necessitatibus dolore laboriosam corrupti, omnis alias illo? Veritatis voluptas fugiat autem eos possimus non consequuntur esse.",
    image: "/slider/2.png",
    href: "/",
  },
];

export interface CarProps {
  id: number;
  name: string;
  year: number;
  type: string;
  imageUrl: string;
  passengers: number;
  doors: number;
  bags: string;
  transmission: string;
  pricePerDay: number;
}

export const carsData: CarProps[] = [
  {
    id: 1,
    name: "Toyota Yaris",
    year: 2016,
    type: "Luxury Car",
    imageUrl: "/cars/1.png",
    passengers: 4,
    doors: 4,
    bags: "2 Bags",
    transmission: "Auto",
    pricePerDay: 400,
  },
  {
    id: 2,
    name: "Honda Civic",
    year: 2019,
    type: "Compact Car",
    imageUrl: "/cars/2.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Manual",
    pricePerDay: 350,
  },
  {
    id: 3,
    name: "BMW X5",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/3.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 500,
  },
  {
    id: 4,
    name: "Audi A4",
    year: 2020,
    type: "Luxury Car",
    imageUrl: "/cars/4.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 450,
  },
  {
    id: 5,
    name: "Mercedes Benz C-Class",
    year: 2018,
    type: "Luxury Car",
    imageUrl: "/cars/5.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 480,
  },
  {
    id: 6,
    name: "Ford Mustang",
    year: 2017,
    type: "Sports Car",
    imageUrl: "/cars/6.png",
    passengers: 4,
    doors: 2,
    bags: "2 Bags",
    transmission: "Manual",
    pricePerDay: 600,
  },
  {
    id: 7,
    name: "Tesla Model 3",
    year: 2022,
    type: "Electric Car",
    imageUrl: "/cars/7.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 550,
  },
  {
    id: 8,
    name: "Chevrolet Camaro",
    year: 2020,
    type: "Sports Car",
    imageUrl: "/cars/8.png",
    passengers: 4,
    doors: 2,
    bags: "2 Bags",
    transmission: "Manual",
    pricePerDay: 620,
  },
  {
    id: 9,
    name: "Nissan Altima",
    year: 2019,
    type: "Sedan",
    imageUrl: "/cars/9.png",
    passengers: 5,
    doors: 4,
    bags: "2 Bags",
    transmission: "Auto",
    pricePerDay: 370,
  },
  {
    id: 10,
    name: "Hyundai Tucson",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/10.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 400,
  },
  {
    id: 11,
    name: "Kia Sorento",
    year: 2020,
    type: "SUV",
    imageUrl: "/cars/11.png",
    passengers: 7,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 420,
  },
  {
    id: 12,
    name: "Volkswagen Passat",
    year: 2018,
    type: "Sedan",
    imageUrl: "/cars/12.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Manual",
    pricePerDay: 360,
  },
  {
    id: 13,
    name: "Mazda CX-5",
    year: 2022,
    type: "SUV",
    imageUrl: "/cars/13.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 460,
  },
  {
    id: 14,
    name: "Jaguar XF",
    year: 2021,
    type: "Luxury Car",
    imageUrl: "/cars/14.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 530,
  },
  {
    id: 15,
    name: "Subaru Outback",
    year: 2019,
    type: "Crossover",
    imageUrl: "/cars/15.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Manual",
    pricePerDay: 390,
  },
  {
    id: 16,
    name: "Land Rover Discovery",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/16.png",
    passengers: 7,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 650,
  },
  {
    id: 17,
    name: "Porsche 911",
    year: 2018,
    type: "Sports Car",
    imageUrl: "/cars/17.png",
    passengers: 2,
    doors: 2,
    bags: "1 Bag",
    transmission: "Manual",
    pricePerDay: 700,
  },
  {
    id: 18,
    name: "Ford Explorer",
    year: 2020,
    type: "SUV",
    imageUrl: "/cars/18.png",
    passengers: 7,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 470,
  },
  {
    id: 19,
    name: "Chevrolet Tahoe",
    year: 2019,
    type: "SUV",
    imageUrl: "/cars/19.png",
    passengers: 7,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 600,
  },
  {
    id: 20,
    name: "Volvo XC90",
    year: 2022,
    type: "Luxury SUV",
    imageUrl: "/cars/20.png",
    passengers: 7,
    doors: 4,
    bags: "6 Bags",
    transmission: "Auto",
    pricePerDay: 680,
  },
];

export interface HomeTypesCar {
  type: string;
  image: string;
}

export const homeTypesData: HomeTypesCar[] = [
  { type: 'Sport Car', image: '/types/1.jpg' },
  { type: 'Convertible Car', image: '/types/2.jpg' },
  { type: 'Sedan Car', image: '/types/3.jpg' },
  { type: 'Luxury Car', image: '/types/4.jpg' },
];

export interface ServiceItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const servicesData: ServiceItemProps[] = [
  {
    id: 1,
    title: 'Car rental with driver',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/service/1.png',
  },
  {
    id: 2,
    title: 'Luxury car rental',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/service/2.png',
  },
  {
    id: 3,
    title: 'Airport Transfer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/service/3.png',
  },
  {
    id: 4,
    title: 'Safe car rental',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/service/4.png',
  },
];

export interface BlogProps {
  title: string;
  image: string;
  date: string;
  href: string;
}

export const blogData: BlogProps[] = [
  {
    title: 'Exploring the City: Best Urban Destinations for a Weekend Getaway',
    image: '/types/1.jpg',
    date: 'Sep 27, 2024',
    href: '/',
  },
  {
    title: 'The Ultimate Guide to Road Trips: Top Routes and Tips for Beginners',
    image: '/types/2.jpg',
    date: 'Oct 5, 2024',
    href: '/',
  },
  {
    title: 'Eco-Friendly Travel: Sustainable Practices for the Modern Traveler',
    image: '/types/3.jpg',
    date: 'Oct 15, 2024',
    href: '/',
  },
  {
    title: 'Luxury Escapes: Best High-End Destinations Around the World',
    image: '/types/4.jpg',
    date: 'Oct 22, 2024',
    href: '/',
  },
  {
    title: 'Luxury Escapes: Best High-End Destinations Around the World',
    image: '/types/4.jpg',
    date: 'Oct 22, 2024',
    href: '/',
  },
];

export interface LogoProps {
  image: string;
}

export const logoData: LogoProps[] = [
  { image: '/logo/1.png' },
  { image: '/logo/2.png' },
  { image: '/logo/3.png' },
  { image: '/logo/4.png' },
  { image: '/logo/5.png' },
  { image: '/logo/6.png' },
  { image: '/logo/7.png' },
  { image: '/logo/8.png' },
];




export interface MissionProps {
  image: string;
  title:string;
  keys:string;
}
export const missionData: MissionProps[] = [
  { image: '/types/1.jpg', title:"Our Vision", keys:"vision" },
  { image: '/types/2.jpg', title:"Our Mission", keys:"mission" },
  { image: '/types/3.jpg', title:"Our Approach", keys:"approach" },
];

export interface PeopleProps {
  image: string;
  fullname: string;
  role: string;
}

export const personData: PeopleProps[] = [
  { image: '/people/1.png', fullname: "Our Vision", role: "Senior Chauffeur" },
  { image: '/people/2.png', fullname: "Jane Doe", role: "Customer Service Manager" },
  { image: '/people/3.png', fullname: "John Smith", role: "Operations Director" },
  { image: '/people/4.png', fullname: "Emily Johnson", role: "Marketing Specialist" }
];



export interface testimonialsDataProps {
  stars: number;
  comment: string;
  author: string;
  image:string;
}

export const testimonialsData:testimonialsDataProps[] = [
  {
    stars: 5,
    comment: "Great service and friendly staff!",
    author: "John Doe",
    image: "/testimonials/1.png",
  },
  {
    stars: 4,
    comment: "The car was clean and well-maintained.",
    author: "Jane Smith",
    image: "/testimonials/2.png",
  },
  {
    stars: 5,
    comment: "Highly recommend this company!",
    author: "Mike Johnson",
    image: "/testimonials/3.png",
  },
  {
    stars: 4,
    comment: "Affordable prices and excellent customer service.",
    author: "Emily Davis",
    image: "/testimonials/4.png",
  },
];


export interface accordionDataProps {
  value: string;
  question: string;
  answer: string;
}

// Data for the accordion
export const accordionData: accordionDataProps[] = [
  {
    value: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    value: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-4",
    question: "Can it be customized?",
    answer: "Yes. You can easily customize the appearance and behavior.",
  },
  {
    value: "item-5",
    question: "It's Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-6",
    question: "customized it be customized?",
    answer: "Yes. You can easily customize the appearance and behavior.",
  },
];




export interface whyChooseUsDataProps {
  id: number;
  title: string;
  description: string;
  icon:string;
}


export const whyChooseUsData: whyChooseUsDataProps[] = [
  {
    id: 1,
    title: "Extensive Fleet Options",
    description:
      "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euisomod Eu. Phasellus Hendrerit, Massa",
      icon: "/service/1.png", 
    },
  {
    id: 2,
    title: "Convenient Locations",
    description:
      "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euisomod Eu. Phasellus Hendrerit, Massa",
      icon: "/service/2.png", 
    },
  {
    id: 3,
    title: "Exceptional Customer Service",
    description:
      "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euisomod Eu. Phasellus Hendrerit, Massa",
      icon: "/service/3.png", 
    },
  {
    id: 4,
    title: "Reliability And Safety",
    description:
      "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euisomod Eu. Phasellus Hendrerit, Massa",
    icon: "/service/4.png", 
  },
];
